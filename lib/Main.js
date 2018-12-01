'use strict';

import EventHandler from './EventHandler';
import EventHandlerRepository from './EventHandlerRepository';
import MessageRepository from './MessageRepository';

class Main {

    /**
     * Создаёт экземпляр класса.
     *
     * @param {string} url URL-адрес для соединения
     * @param {undefined|string|string[]} protocols протоколы
     * @param {{}} options дополнительные опции
     * @throws {TypeError} ошибка указания параметров при создании экземпляра
     */
    constructor(url, protocols = undefined, options = {}) {

        if (typeof url === 'undefined') {
            throw new TypeError('Required URL parameter is missing');
        }

        if (typeof options !== 'object') {
            throw new TypeError('Options is must be an object');
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
         * Репозиторий обработчиков событий.
         *
         * @type {EventHandlerRepository} репозиторий обработчиков событий
         * @private
         */
        this._eventHandlerRepository = new EventHandlerRepository();

        /**
         * Репозиторий очереди сообщений.
         *
         * @type {MessageRepository} репозиторий очереди сообщений
         * @private
         */
        this._messageRepository = new MessageRepository();

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
    static get _standardEventTypes() {
        return ['open', 'message', 'close', 'error'];
    }

    /**
     * Получает кастомные типы событий вебсокета.
     *
     * @return {string[]} кастомные типы событий вебсокета
     * @private
     */
    static get _customEventTypes() {
        return ['opening', 'closing', 'ready'];
    }

    /**
     * Устанавливает соединение.
     *
     * @throws {Error} ошибка установки соединения
     */
    connect() {
        // создание объекта для управление вебсокет-соединением
        try {
            this._webSocket = new window.WebSocket(this._url, this._protocols);
        } catch (error) {
            throw new Error(error.message);
        }

        // установка свойств
        ['binaryType', 'extensions', 'protocol'].forEach(item => {
            if (typeof this['_' + item] !== 'undefined') {
                this._webSocket[item] = this[item]
            }
        });

        // добавление и выполнение событий
        this._executeCustomEvents('opening');
        this._addEventsFromStandardQueue();

        // выполнение отправки отложенных сообщений
        this._webSocket.addEventListener('open', (event) => {
            this._currentAttempts = 0;
            this._currentReconnectionDelay = this._options.reconnectionOptions.delay;
            this._sendMessagesFromQueue();
            this._executeCustomEvents('ready', event);
        });

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
                    this._currentAttempts++;
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
     * @throws {Error} ошибка проверки типа объекта для управление вебсокет-соединением
     */
    reconnect() {
        if (!(this._webSocket instanceof window.WebSocket)) {
            throw new Error('WebSocket instance is not defined');
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
            this._messageRepository.add(data);
        }
    }

    /**
     * Закрывает соединние.
     *
     * @param {number} code код закрытия
     * @param {string} reason описание закрытия
     * @throws {Error} ошибка закрытия соединения
     */
    close(code = 1000, reason) {
        this._executeCustomEvents('closing');
        this._messageRepository.clear();
        if (this._options.reconnection) {
            this._currentAttempts = this._options.reconnectionOptions.attempts;
        }
        try {
            this._webSocket.close(code, reason);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    /**
     * Устанавливает обработчик события и возвращает его идентификатор.
     *
     * @param {string} eventType тип события
     * @param {Function} handler обработчик события
     * @return {number|boolean} идентификатор обработчика события или false
     * @throws {TypeError} ошибка указания параметров
     */
    on(eventType, handler) {
        if ([...Main._standardEventTypes, ...Main._customEventTypes].indexOf(eventType) > -1) {
            return this._eventHandlerRepository.add(new EventHandler(eventType, handler));
        } else {
            return false;
        }
    }

    /**
     * Удаляет обработчик события по идентификатору обработчика события, типу события или самому обработчику.
     *
     * @param {number|string|Function} key ключ
     * @return {boolean} результат выполнения операции
     * @throws {TypeError} ошибка указания параметров
     */
    off(key) {
        let result = false;
        switch (typeof key) {
            case 'number':
                result = this._eventHandlerRepository.deleteById(key);
                break;
            case 'string':
                result = this._eventHandlerRepository.deleteByEventType(key);
                break;
            case 'function':
                result = this._eventHandlerRepository.deleteByHandler(key);
                break;
        }
        return result;
    }

    /**
     * Устанавливает события из очереди стандратных событий.
     *
     * @private
     */
    _addEventsFromStandardQueue() {
        Main._standardEventTypes.forEach(eventType => {
            this._webSocket.addEventListener(eventType, (event) => {
                this._eventHandlerRepository.getByEventType(eventType).forEach(eventHandler => {
                    eventHandler.handler.call(this, event);
                });
            });
        });
    }

    /**
     * Выполняет кастомные события.
     *
     * @param {string} eventType тип события
     * @param {Event} event событие
     * @private
     */
    _executeCustomEvents(eventType, event = null) {
        this._eventHandlerRepository.getByEventType(eventType).forEach(eventHandler => {
            eventHandler.handler.call(this, event);
        });
    }

    /**
     * Отправляет сообщения из очереди.
     *
     * @private
     */
    _sendMessagesFromQueue() {
        this._messageRepository.getAll().forEach((message, index) => {
            if (this._webSocket.readyState === window.WebSocket.OPEN) {
                this.send(message);
                this._messageRepository.deleteByIndex(index);
            }
        });
    }
}

export default Main;
