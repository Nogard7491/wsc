(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["wsc"] = factory();
	else
		root["wsc"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./lib/WscError.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var WscError =
/*#__PURE__*/
function (_Error) {
  _inherits(WscError, _Error);

  function WscError() {
    _classCallCheck(this, WscError);

    return _possibleConstructorReturn(this, _getPrototypeOf(WscError).apply(this, arguments));
  }

  return WscError;
}(_wrapNativeSuper(Error));

/* harmony default export */ var lib_WscError = (WscError);
// CONCATENATED MODULE: ./lib/Wsc.js


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Wsc_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Wsc_typeof = function _typeof(obj) { return typeof obj; }; } else { Wsc_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Wsc_typeof(obj); }

function Wsc_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Wsc_Wsc =
/*#__PURE__*/
function () {
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
  function Wsc(url) {
    var protocols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    Wsc_classCallCheck(this, Wsc);

    if (typeof url === 'undefined') {
      throw new lib_WscError('Required URL parameter is missing');
    }

    if (Wsc_typeof(options) !== 'object') {
      throw new lib_WscError('Options is must be an object');
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

    this._options = _objectSpread({}, {
      useMessageQueue: true,
      // использование отправки сообщений из очереди (которые накопились при неактивном соединении)
      reconnection: true,
      // использование переподключения
      reconnectionOptions: {
        // опции переподключения
        attempts: Infinity,
        // количество попыток переподключения
        delay: 1000,
        // время задержки переподключения
        maxDelay: 5000,
        // максимальное время задержки переподключения
        increaseDelay: 1000 // время для увеличения задержки переподключения после каждой попытки

      }
    }, options);
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

    this._currentReconnectionDelay = this._options.reconnectionOptions.delay; // определение методов для прослушивания событий вебсокета

    this._defineEvents();
  }
  /**
   * Получает тип двоичных данных.
   *
   * @return {string} тип двоичных данных
   */


  _createClass(Wsc, [{
    key: "connect",

    /**
     * Устанавливает соединение.
     */
    value: function connect() {
      var _this = this;

      // создание объекта для управление вебсокет-соединением
      try {
        this._webSocket = new window.WebSocket(this._url, this._protocols);
      } catch (error) {
        throw new lib_WscError(error.message);
      } // установка свойств


      ['binaryType', 'extensions', 'protocol'].forEach(function (item) {
        if (typeof _this['_' + item] !== 'undefined') {
          _this._webSocket[item] = _this[item];
        }
      }); // выполнение отправки отложенных сообщений

      this._webSocket.addEventListener('open', function (event) {
        _this._currentAttempts = 0;
        _this._currentReconnectionDelay = _this._options.reconnectionOptions.delay;

        _this._sendMessagesFromQueue();

        _this._executeCustomEvents('ready', event);
      }); // добавление и выполнение событий


      this._executeCustomEvents('opening');

      this._addEventsFromStandardQueue(); // выполнение автоматического переподключения соединения


      if (this._options.reconnection) {
        this._webSocket.addEventListener('close', function (event) {
          if (!event.wasClean && _this._currentAttempts < _this._options.reconnectionOptions.attempts) {
            var currentTimestamp = Date.now();
            var timeoutTimestamp = _this._currentReconnectionDelay - (currentTimestamp - _this._reconnectionAttemptAt);

            if (timeoutTimestamp < 0) {
              _this.reconnect();
            } else {
              setTimeout(function () {
                _this.reconnect();
              }, timeoutTimestamp);
            }

            _this._currentAttempts++;
            _this._currentReconnectionDelay += _this._options.reconnectionOptions.increaseDelay;

            if (_this._currentReconnectionDelay > _this._options.reconnectionOptions.maxDelay) {
              _this._currentReconnectionDelay = _this._options.reconnectionOptions.maxDelay;
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

  }, {
    key: "reconnect",
    value: function reconnect() {
      if (!(this._webSocket instanceof window.WebSocket)) {
        throw new lib_WscError('WebSocket instance is not defined');
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

  }, {
    key: "send",
    value: function send(data) {
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

  }, {
    key: "close",
    value: function close() {
      var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
      var reason = arguments.length > 1 ? arguments[1] : undefined;

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
        throw new lib_WscError(error.message);
      }
    }
    /**
     * Определяет методы для прослушивания событий вебсокета.
     *
     * @private
     */

  }, {
    key: "_defineEvents",
    value: function _defineEvents() {
      var _this2 = this;

      // определение стандартных событий
      this._standardEvents.forEach(function (eventType) {
        var methodName = 'on' + eventType.charAt(0).toUpperCase() + eventType.slice(1);

        _this2[methodName] = function (callback) {
          if (_this2._webSocket instanceof window.WebSocket) {
            _this2._webSocket.addEventListener(eventType, function (event) {
              callback.call(_this2, eventType, event);
            });
          }

          _this2._standardEventQueue.push({
            eventType: eventType,
            callback: callback
          });
        };
      }); // определение кастомных событий


      this._customEvents.forEach(function (eventType) {
        var methodName = 'on' + eventType.charAt(0).toUpperCase() + eventType.slice(1);

        _this2[methodName] = function (callback) {
          _this2._customEventQueue.push({
            eventType: eventType,
            callback: callback
          });
        };
      });
    }
    /**
     * Устанавливает события из очереди стандратных событий.
     *
     * @private
     */

  }, {
    key: "_addEventsFromStandardQueue",
    value: function _addEventsFromStandardQueue() {
      var _this3 = this;

      this._standardEventQueue.forEach(function (value, index, queue) {
        var eventType = value.eventType,
            callback = value.callback;

        _this3._webSocket.addEventListener(eventType, function (event) {
          callback.call(_this3, eventType, event);
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

  }, {
    key: "_executeCustomEvents",
    value: function _executeCustomEvents(targetEventType) {
      var _this4 = this;

      var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this._customEventQueue.forEach(function (value, index, queue) {
        var eventType = value.eventType,
            callback = value.callback;

        if (targetEventType === eventType) {
          callback.call(_this4, eventType, event);
        }
      });
    }
    /**
     * Отправляет сообщения из очереди.
     *
     * @private
     */

  }, {
    key: "_sendMessagesFromQueue",
    value: function _sendMessagesFromQueue() {
      var _this5 = this;

      this._messageQueue.forEach(function (value, index, queue) {
        if (_this5._webSocket.readyState === window.WebSocket.OPEN) {
          _this5.send(value);

          delete queue[index];
        }
      });
    }
  }, {
    key: "binaryType",
    get: function get() {
      if (this._webSocket instanceof window.WebSocket) {
        return this._webSocket.binaryType;
      } else if (typeof this._binaryType !== 'undefined') {
        return Wsc_typeof(this._binaryType);
      } else {
        return 'blob';
      }
    }
    /**
     * Устанавливает тип двоичных данных.
     *
     * @param {string} value тип двоичных данных
     */
    ,
    set: function set(value) {
      this._binaryType = value;

      if (this._webSocket instanceof window.WebSocket) {
        this._webSocket.binaryType = value;
      }
    }
    /**
     * Получает количество байтов данных, которые были поставлены в очередь, используя вызовы send(),
     * но ещё не переданные в сеть.
     */

  }, {
    key: "bufferedAmount",
    get: function get() {
      return this._webSocket instanceof window.WebSocket ? this._webSocket.bufferedAmount : 0;
    }
    /**
     * Получает расширения, выбранные сервером.
     *
     * @return {string} расширения, выбранные сервером
     */

  }, {
    key: "extensions",
    get: function get() {
      if (this._webSocket instanceof window.WebSocket) {
        return this._webSocket.extensions;
      } else if (typeof this._extensions !== 'undefined') {
        return Wsc_typeof(this._extensions);
      } else {
        return '';
      }
    }
    /**
     * Устанавливает расширения, выбранные сервером.
     *
     * @param {string} value расширения, выбранные сервером
     */
    ,
    set: function set(value) {
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

  }, {
    key: "protocol",
    get: function get() {
      if (this._webSocket instanceof window.WebSocket) {
        return this._webSocket.protocol;
      } else if (typeof this._protocol !== 'undefined') {
        return Wsc_typeof(this._protocol);
      } else {
        return '';
      }
    }
    /**
     * Устанавливает расширения, выбранные сервером
     *
     * @param {string} value расширения, выбранные сервером
     */
    ,
    set: function set(value) {
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

  }, {
    key: "readyState",
    get: function get() {
      return this._webSocket instanceof window.WebSocket ? this._webSocket.readyState : 0;
    }
    /**
     * Получает URL-адрес для соединения.
     *
     * @return {string} URL-адрес для соединения
     */

  }, {
    key: "url",
    get: function get() {
      return this._webSocket instanceof window.WebSocket ? this._webSocket.url : this._url;
    }
    /**
     * Получает стандартные типы событий вебсокета.
     *
     * @return {string[]} стандартные типы событий вебсокета
     * @private
     */

  }, {
    key: "_standardEvents",
    get: function get() {
      return ['open', 'message', 'close', 'error'];
    }
    /**
     * Получает кастомные типы событий вебсокета.
     *
     * @return {string[]} кастомные типы событий вебсокета
     * @private
     */

  }, {
    key: "_customEvents",
    get: function get() {
      return ['opening', 'closing', 'ready'];
    }
  }]);

  return Wsc;
}();

/* harmony default export */ var lib_Wsc = (Wsc_Wsc);
// CONCATENATED MODULE: ./index.js



/* harmony default export */ var index = __webpack_exports__["default"] = (lib_Wsc);

/***/ })
/******/ ]);
});
//# sourceMappingURL=wsc-1.0.2.js.map