'use strict';

import WscError from './WscError.js';

class Wsc {

    /**
     * Создаёт экземпляр класса.
     *
     * @param {string} url URL-адрес для соединения
     * @param {undefined|string|string[]} protocols протоколы
     * @param {{}} options дополнительные опции
     * @property {Function} onOpening метод для прослушивания процесса открытия соединения
     * @property {Function} onOpen метод для прослушивания открытия соединения
     * @property {Function} onReady метод для прослушивания готовности соединения
     * @property {Function} onMessage метод для прослушивания сообщения
     * @property {Function} onClosing метод для прослушивания процесса закрытия соединения
     * @property {Function} onClose метод для прослушивания закрытия соединения
     * @property {Function} onError метод для прослушивания ошибки
     * @throws {WscError} ошибка указания параметров при создании экземпляра
     */
    constructor(url, protocols = undefined, options = {}) {

        if (typeof url === 'undefined') {
            throw new WscError('Required URL parameter is missing');
        }

        if (typeof options !== 'object') {
            throw new WscError('Options is must be an object');
        }

        /**
         * URL-адрес для соединения.
         *
         * @type {string}
         * @private
         */
        this._url = url;

        /**
         * Протоколы.
         *
         * @type {string[]}
         * @private
         */
        this._protocols = protocols;

        /**
         * Дополнительные опции.
         *
         * @type {{}}
         * @private
         */
        this._options = {
            ...{
                useMessageQueue: true, // использование отправки сообщений из очереди (которые накопились при неактивном соединении)
                reconnection: true, // использование переподключения
                reconnectionOptions: { // опции переподключения
                    attempts: Infinity, // количество попыток переподключения
                    delay: 1000, // время задержки переподключения
                    maxDelay: 5000, // максимальное время задержки переподключения
                    increaseDelay: 1000, // время для увеличения задержки переподключения после каждой попытки
                }
            },
            ...options,
        };

        /**
         * Вебсокет.
         *
         * @type {undefined|WebSocket}
         * @private
         */
        this._webSocket = undefined;

        /**
         * Тип двоичных данных.
         *
         * @type {undefined|string}
         * @private
         */
        this._binaryType = undefined;

        /**
         * Расширения, выбранные сервером. В настоящее время это только пустая строка или список расширений,
         * согласованных соединением.
         *
         * @type {undefined|string} расширения, выбранные сервером
         * @private
         */
        this._extensions = undefined;

        /**
         * Строка, обозначающая имя подпротокола выбранного сервера.
         *
         * @type {undefined|string} строка, обозначающая имя подпротокола выбранного сервера
         * @private
         */
        this._protocol = undefined;

        /**
         * Очередь стандартных событий.
         *
         * @type {{eventType: string, callback: Function}[]}
         * @private
         */
        this._standardEventQueue = [];

        /**
         * Очередь кастомных событий.
         *
         * @type {{eventType: string, callback: Function}[]}
         * @private
         */
        this._customEventQueue = [];

        /**
         * Очередь сообщений.
         *
         * @type {{string|ArrayBufferLike|Blob|ArrayBufferView}[]}
         * @private
         */
        this._messageQueue = [];

        /**
         * Время последней попытки переподключения.
         *
         * @type {number}
         * @private
         */
        this._reconnectionAttemptAt = Date.now();

        /**
         * Текущее количество попыток переподключения.
         *
         * @type {number}
         * @private
         */
        this._currentAttempts = 0;

        /**
         * Текущее время задержки переподключения.
         *
         * @type {number}
         * @private
         */
        this._currentReconnectionDelay = this._options.reconnectionOptions.delay;

        // определение методов для прослушивания событий вебсокета
        this._defineEvents();
    }

    /**
     * Получает тип двоичных данных.
     *
     * @return {string} тип двоичных данных
     */
    get binaryType() {
        if (this._webSocket instanceof window.WebSocket) {
            return this._webSocket.binaryType;
        } else if (typeof this._binaryType !== 'undefined') {
            return typeof this._binaryType;
        } else {
            return 'blob';
        }
    }

    /**
     * Устанавливает тип двоичных данных.
     *
     * @param {string} value тип двоичных данных
     */
    set binaryType(value) {
        this._binaryType = value;
        if (this._webSocket instanceof window.WebSocket) {
            this._webSocket.binaryType = value;
        }
    }

    /**
     * Получает количество байтов данных, которые были поставлены в очередь, используя вызовы send(),
     * но ещё не переданные в сеть.
     */
    get bufferedAmount() {
        return (this._webSocket instanceof window.WebSocket)
            ? this._webSocket.bufferedAmount
            : 0;
    }

    /**
     * Получает расширения, выбранные сервером.
     *
     * @return {string} расширения, выбранные сервером
     */
    get extensions() {
        if (this._webSocket instanceof window.WebSocket) {
            return this._webSocket.extensions;
        } else if (typeof this._extensions !== 'undefined') {
            return typeof this._extensions;
        } else {
            return '';
        }
    }

    /**
     * Устанавливает расширения, выбранные сервером.
     *
     * @param {string} value расширения, выбранные сервером
     */
    set extensions(value) {
        this._binaryType = extensions;
        if (this._webSocket instanceof window.WebSocket) {
            this._webSocket.extensions = value;
        }
    }

    /**
     * Получает расширения, выбранные сервером
     *
     * @return {string} расширения, выбранные сервером
     */
    get protocol() {
        if (this._webSocket instanceof window.WebSocket) {
            return this._webSocket.protocol;
        } else if (typeof this._protocol !== 'undefined') {
            return typeof this._protocol;
        } else {
            return '';
        }
    }

    /**
     * Устанавливает расширения, выбранные сервером
     *
     * @param {string} value расширения, выбранные сервером
     */
    set protocol(value) {
        this._protocol = value;
        if (this._webSocket instanceof window.WebSocket) {
            this._webSocket.extensions = value;
        }
    }

    /**
     * Получает текущее состояние подключения.
     *
     * @return {number} текущее состояние подключения
     */
    get readyState() {
        return (this._webSocket instanceof window.WebSocket) ? this._webSocket.readyState : 0;
    }

    /**
     * Получает URL-адрес для соединения.
     *
     * @return {string} URL-адрес для соединения
     */
    get url() {
        return (this._webSocket instanceof window.WebSocket) ? this._webSocket.url : this._url;
    }

    /**
     * Получает стандартные типы событий вебсокета.
     *
     * @return {string[]} стандартные типы событий вебсокета
     * @private
     */
    get _standardEvents() {
        return ['open', 'message', 'close', 'error'];
    }

    /**
     * Получает кастомные типы событий вебсокета.
     *
     * @return {string[]} кастомные типы событий вебсокета
     * @private
     */
    get _customEvents() {
        return ['opening', 'closing', 'ready'];
    }

    /**
     * Устанавливает соединение.
     */
    connect() {
        // создание объекта для управление вебсокет-соединением
        try {
            this._webSocket = new window.WebSocket(this._url, this._protocols);
        } catch (error) {
            throw new WscError(error.message);
        }

        // установка свойств
        ['binaryType', 'extensions', 'protocol'].forEach(item => {
            if (typeof this['_' + item] !== 'undefined') {
                this._webSocket[item] = this[item]
            }
        });

        // выполнение отправки отложенных сообщений
        this._webSocket.addEventListener('open', (event) => {
            this._currentAttempts = 0;
            this._currentReconnectionDelay = this._options.reconnectionOptions.delay;
            this._sendMessagesFromQueue();
            this._executeCustomEvents('ready', event);
        });

        // добавление и выполнение событий
        this._executeCustomEvents('opening');
        this._addEventsFromStandardQueue();

        // выполнение автоматического переподключения соединения
        if (this._options.reconnection) {
            this._webSocket.addEventListener('close', (event) => {
                if (!event.wasClean && (this._currentAttempts < this._options.reconnectionOptions.attempts)) {
                    let currentTimestamp = Date.now();
                    let timeoutTimestamp = this._currentReconnectionDelay - (currentTimestamp - this._reconnectionAttemptAt);
                    if (timeoutTimestamp < 0) {
                        this.reconnect();
                    } else {
                        setTimeout(() => {
                            this.reconnect();
                        }, timeoutTimestamp);
                    }
                    this._currentAttempts ++;
                    this._currentReconnectionDelay += this._options.reconnectionOptions.increaseDelay;
                    if (this._currentReconnectionDelay > this._options.reconnectionOptions.maxDelay) {
                        this._currentReconnectionDelay = this._options.reconnectionOptions.maxDelay;
                    }
                }
            });
        }
    }

    /**
     * Переоткрывает соединение если оно было открыто первоначально.
     *
     * @throws {WscError} ошибка проверки типа объекта для управление вебсокет-соединением
     */
    reconnect() {
        if (!(this._webSocket instanceof window.WebSocket)) {
            throw new WscError('WebSocket instance is not defined');
        } else {
            this._reconnectionAttemptAt = Date.now();
            if (this._webSocket.readyState === window.WebSocket.OPEN) {
                this._webSocket.close();
            }
            this.connect();
        }
    }

    /**
     * Передаёт данные на сервер.
     *
     * @param {string|ArrayBufferLike|Blob|ArrayBufferView} data данные
     */
    send(data) {
        if (this._webSocket instanceof window.WebSocket && this._webSocket.readyState === window.WebSocket.OPEN) {
            this._webSocket.send(data);
        } else if (this._options.useMessageQueue) {
            this._messageQueue.push(data);
        }
    }

    /**
     * Закрывает соединние.
     *
     * @param {number} code код закрытия
     * @param {string} reason описание закрытия
     */
    close(code = 1000, reason) {
        this._executeCustomEvents('closing');
        this._messageQueue = [];
        this._standardEventQueue = [];
        this._customEventQueue = [];
        if (this._options.reconnection) {
            this._currentAttempts = this._options.reconnectionOptions.attempts;
        }
        try {
            this._webSocket.close(code, reason);
        } catch (error) {
            throw new WscError(error.message);
        }
    }

    /**
     * Определяет методы для прослушивания событий вебсокета.
     *
     * @private
     */
    _defineEvents() {

        // определение стандартных событий
        this._standardEvents.forEach(eventType => {
            let methodName = 'on' + eventType.charAt(0).toUpperCase() + eventType.slice(1);
            this[methodName] = (callback) => {
                if (this._webSocket instanceof window.WebSocket) {
                    this._webSocket.addEventListener(eventType, (event) => {
                        callback.call(this, eventType, event);
                    });
                }
                this._standardEventQueue.push({
                    eventType: eventType,
                    callback: callback,
                });
            };
        });

        // определение кастомных событий
        this._customEvents.forEach(eventType => {
            let methodName = 'on' + eventType.charAt(0).toUpperCase() + eventType.slice(1);
            this[methodName] = (callback) => {
                this._customEventQueue.push({
                    eventType: eventType,
                    callback: callback,
                });
            };
        });
    }

    /**
     * Устанавливает события из очереди стандратных событий.
     *
     * @private
     */
    _addEventsFromStandardQueue() {
        this._standardEventQueue.forEach((value, index, queue) => {
            let {eventType, callback} = value;
            this._webSocket.addEventListener(eventType, (event) => {
                callback.call(this, eventType, event);
            });
        });
    }

    /**
     * Выполняет события кастомные события.
     *
     * @param {string} targetEventType тип события
     * @param {Event} event событие
     * @private
     */
    _executeCustomEvents(targetEventType, event = null) {
        this._customEventQueue.forEach((value, index, queue) => {
            let {eventType, callback} = value;
            if (targetEventType === eventType) {
                callback.call(this, eventType, event);
            }
        });
    }

    /**
     * Отправляет сообщения из очереди.
     *
     * @private
     */
    _sendMessagesFromQueue() {
        this._messageQueue.forEach((value, index, queue) => {
            if (this._webSocket.readyState === window.WebSocket.OPEN) {
                this.send(value);
                delete queue[index];
            }
        });
    }
}

export default Wsc;