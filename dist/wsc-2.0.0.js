(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Wsc"] = factory();
	else
		root["Wsc"] = factory();
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

// CONCATENATED MODULE: ./lib/EventHandler.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventHandler =
/*#__PURE__*/
function () {
  /**
   * Создаёт экземпляр класса.
   *
   * @param {string} eventType тип события
   * @param {Function} handler обработчик события
   */
  function EventHandler(eventType, handler) {
    _classCallCheck(this, EventHandler);

    this._eventType = eventType;
    this._handler = handler;
  }
  /**
   * Получает тип события.
   *
   * @return {string} тип события
   */


  _createClass(EventHandler, [{
    key: "compareTo",

    /**
     * Сравнивает текущий экземпляр класса с другим.
     *
     * @param {EventHandler} eventHandler экземпляр класса EventHandler
     * @return {boolean} результат сравнения
     */
    value: function compareTo(eventHandler) {
      return eventHandler instanceof EventHandler && eventHandler.eventType === this._eventType && eventHandler.handler.toString() === this._handler.toString();
    }
  }, {
    key: "eventType",
    get: function get() {
      return this._eventType;
    }
    /**
     * Получает обработчик события.
     *
     * @return {Function} обработчик события
     */

  }, {
    key: "handler",
    get: function get() {
      return this._handler;
    }
  }]);

  return EventHandler;
}();

/* harmony default export */ var lib_EventHandler = (EventHandler);
// CONCATENATED MODULE: ./lib/RepositoryElement.js


function RepositoryElement_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RepositoryElement_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RepositoryElement_createClass(Constructor, protoProps, staticProps) { if (protoProps) RepositoryElement_defineProperties(Constructor.prototype, protoProps); if (staticProps) RepositoryElement_defineProperties(Constructor, staticProps); return Constructor; }

var RepositoryElement =
/*#__PURE__*/
function () {
  /**
   * Создаёт экземпляр класса.
   *
   * @param {number} id идентификатор элемента
   * @param {*} value значение элемента
   */
  function RepositoryElement(id, value) {
    RepositoryElement_classCallCheck(this, RepositoryElement);

    this._id = id;
    this._value = value;
  }
  /**
   * Получает идентификатор элемента.
   *
   * @return {number} идентификатор элемента
   */


  RepositoryElement_createClass(RepositoryElement, [{
    key: "id",
    get: function get() {
      return this._id;
    }
    /**
     * Получает значение элемента.
     *
     * @return {*} значение элемента
     */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    }
    /**
     * Устанавливает значение элемента.
     *
     * @param {*} value значение элемента
     */
    ,
    set: function set(value) {
      this._value = value;
    }
  }]);

  return RepositoryElement;
}();

/* harmony default export */ var lib_RepositoryElement = (RepositoryElement);
// CONCATENATED MODULE: ./lib/Repository.js


function Repository_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Repository_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Repository_createClass(Constructor, protoProps, staticProps) { if (protoProps) Repository_defineProperties(Constructor.prototype, protoProps); if (staticProps) Repository_defineProperties(Constructor, staticProps); return Constructor; }



var Repository_Repository =
/*#__PURE__*/
function () {
  /**
   * Создаёт экземпляр класса.
   */
  function Repository() {
    Repository_classCallCheck(this, Repository);

    this._elementId = 0;
    this._repository = [];
  }
  /**
   * Получает элемент из хранилища по его идентификатору.
   *
   * @param {number} id индекс элемента в хранилище
   * @return {*|null} элемент
   */


  Repository_createClass(Repository, [{
    key: "getById",
    value: function getById(id) {
      var result = null;

      this._repository.forEach(function (repositoryElement) {
        if (result === null && repositoryElement.id === id) {
          result = repositoryElement.value;
        }
      });

      return result;
    }
    /**
     * Получает все элементы из хранилища.
     *
     * @return {Array} элементы хранилища
     */

  }, {
    key: "getAll",
    value: function getAll() {
      return this._repository.map(function (repositoryElement) {
        return repositoryElement.value;
      });
    }
    /**
     * Добавляет элемент в хранилище.
     *
     * @param {*} element элемент
     * @return {number} идентификатор элемента
     */

  }, {
    key: "add",
    value: function add(element) {
      var repositoryElement = new lib_RepositoryElement(++this._elementId, element);

      this._repository.push(repositoryElement);

      return repositoryElement.id;
    }
    /**
     * Удаляет элемент из хранилища по его идентификатору.
     *
     * @param {number} id идентификатор элемента
     * @return {boolean} результат выполнения операции
     */

  }, {
    key: "deleteById",
    value: function deleteById(id) {
      var result = false;

      this._repository.forEach(function (repositoryElement, index, repository) {
        if (repositoryElement.id === id) {
          repository.splice(index, 1);
          result = true;
        }
      });

      return result;
    }
    /**
     * Удаляет элемент из хранилища по его индексу.
     *
     * @param {number} index порядковый индекс элемента в хранилище
     * @return {boolean} результат выполнения операции
     */

  }, {
    key: "deleteByIndex",
    value: function deleteByIndex(index) {
      if (typeof this._repository[index] !== 'undefined') {
        this._repository.splice(index, 1);

        return true;
      }

      return false;
    }
    /**
     * Очищает хранилище.
     */

  }, {
    key: "clear",
    value: function clear() {
      this._repository = [];
    }
    /**
     * Получает элементов хранилища.
     *
     * @return {number} количество элементов хранилища.
     */

  }, {
    key: "length",
    get: function get() {
      return this._repository.length;
    }
  }]);

  return Repository;
}();

/* harmony default export */ var lib_Repository = (Repository_Repository);
// CONCATENATED MODULE: ./lib/EventHandlerRepository.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function EventHandlerRepository_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EventHandlerRepository_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EventHandlerRepository_createClass(Constructor, protoProps, staticProps) { if (protoProps) EventHandlerRepository_defineProperties(Constructor.prototype, protoProps); if (staticProps) EventHandlerRepository_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var EventHandlerRepository =
/*#__PURE__*/
function (_Repository) {
  _inherits(EventHandlerRepository, _Repository);

  /**
   * Создаёт экземпляр класса.
   */
  function EventHandlerRepository() {
    EventHandlerRepository_classCallCheck(this, EventHandlerRepository);

    return _possibleConstructorReturn(this, _getPrototypeOf(EventHandlerRepository).call(this));
  }
  /**
   * Добавляет элемент в хранилище.
   *
   * @param {EventHandler} eventHandler элемент
   * @return {number} идентификатор элемента
   */


  EventHandlerRepository_createClass(EventHandlerRepository, [{
    key: "add",
    value: function add(eventHandler) {
      return _get(_getPrototypeOf(EventHandlerRepository.prototype), "add", this).call(this, eventHandler);
    }
    /**
     * Получает элементы из хранилища по типу события.
     *
     * @param {string} eventType тип события
     * @return {Array} элементы хранилища
     */

  }, {
    key: "getByEventType",
    value: function getByEventType(eventType) {
      return this.getAll().filter(function (eventHandler) {
        return eventHandler.eventType === eventType;
      });
    }
    /**
     * Получает элементы из хранилища по обработчику события.
     *
     * @param {Function} handler обработчик события
     * @return {Array} элементы хранилища
     */

  }, {
    key: "getByHandler",
    value: function getByHandler(handler) {
      return this.getAll().filter(function (eventHandler) {
        return eventHandler.handler.toString() === handler.toString();
      });
    }
    /**
     * Проверяет наличие элементов в хранилище по типу события.
     *
     * @param {string} eventType тип события
     * @return {boolean} результат проверки
     */

  }, {
    key: "hasByEventType",
    value: function hasByEventType(eventType) {
      return Boolean(this.getByEventType(eventType).length);
    }
    /**
     * Проверяет наличие элементов в хранилище по обработчику события.
     *
     * @param {Function} handler обработчик события
     * @return {boolean} результат проверки
     */

  }, {
    key: "hasByHandler",
    value: function hasByHandler(handler) {
      return Boolean(this.getByHandler(handler).length);
    }
    /**
     * Удаляет элементы из хранилища по типу события.
     *
     * @param {string} eventType тип события
     * @return {boolean} результат выполнения операции
     */

  }, {
    key: "deleteByEventType",
    value: function deleteByEventType(eventType) {
      var _this = this;

      var result = false;

      this._repository.forEach(function (repositoryElement) {
        var eventHandler = repositoryElement.value;

        if (eventHandler.eventType === eventType && _this.deleteById(repositoryElement.id)) {
          result = true;
        }
      });

      return result;
    }
    /**
     * Удаляет элементы из хранилища по обработчику события.
     *
     * @param {Function} handler обработчик события
     * @return {boolean} результат выполнения операции
     */

  }, {
    key: "deleteByHandler",
    value: function deleteByHandler(handler) {
      var _this2 = this;

      var result = false;

      this._repository.forEach(function (repositoryElement) {
        var eventHandler = repositoryElement.value;

        if (eventHandler.handler.toString() === handler.toString() && _this2.deleteById(repositoryElement.id)) {
          result = true;
        }
      });

      return result;
    }
  }]);

  return EventHandlerRepository;
}(lib_Repository);

/* harmony default export */ var lib_EventHandlerRepository = (EventHandlerRepository);
// CONCATENATED MODULE: ./lib/MessageRepository.js


function MessageRepository_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MessageRepository_typeof = function _typeof(obj) { return typeof obj; }; } else { MessageRepository_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MessageRepository_typeof(obj); }

function MessageRepository_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MessageRepository_possibleConstructorReturn(self, call) { if (call && (MessageRepository_typeof(call) === "object" || typeof call === "function")) { return call; } return MessageRepository_assertThisInitialized(self); }

function MessageRepository_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MessageRepository_getPrototypeOf(o) { MessageRepository_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MessageRepository_getPrototypeOf(o); }

function MessageRepository_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MessageRepository_setPrototypeOf(subClass, superClass); }

function MessageRepository_setPrototypeOf(o, p) { MessageRepository_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MessageRepository_setPrototypeOf(o, p); }



var MessageRepository =
/*#__PURE__*/
function (_Repository) {
  MessageRepository_inherits(MessageRepository, _Repository);

  function MessageRepository() {
    MessageRepository_classCallCheck(this, MessageRepository);

    return MessageRepository_possibleConstructorReturn(this, MessageRepository_getPrototypeOf(MessageRepository).apply(this, arguments));
  }

  return MessageRepository;
}(lib_Repository);

/* harmony default export */ var lib_MessageRepository = (MessageRepository);
// CONCATENATED MODULE: ./lib/Main.js


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Main_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Main_typeof = function _typeof(obj) { return typeof obj; }; } else { Main_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Main_typeof(obj); }

function Main_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Main_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Main_createClass(Constructor, protoProps, staticProps) { if (protoProps) Main_defineProperties(Constructor.prototype, protoProps); if (staticProps) Main_defineProperties(Constructor, staticProps); return Constructor; }





var Main_Main =
/*#__PURE__*/
function () {
  /**
   * Создаёт экземпляр класса.
   *
   * @param {string} url URL-адрес для соединения
   * @param {undefined|string|string[]} protocols протоколы
   * @param {{}} options дополнительные опции
   * @throws {TypeError} ошибка указания параметров при создании экземпляра
   */
  function Main(url) {
    var protocols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    Main_classCallCheck(this, Main);

    if (typeof url === 'undefined') {
      throw new TypeError('Required URL parameter is missing');
    }

    if (Main_typeof(options) !== 'object') {
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
     * Репозиторий обработчиков событий.
     *
     * @type {EventHandlerRepository} репозиторий обработчиков событий
     * @private
     */

    this._eventHandlerRepository = new lib_EventHandlerRepository();
    /**
     * Репозиторий очереди сообщений.
     *
     * @type {MessageRepository} репозиторий очереди сообщений
     * @private
     */

    this._messageRepository = new lib_MessageRepository();
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


  Main_createClass(Main, [{
    key: "connect",

    /**
     * Устанавливает соединение.
     *
     * @throws {Error} ошибка установки соединения
     */
    value: function connect() {
      var _this = this;

      // создание объекта для управление вебсокет-соединением
      try {
        this._webSocket = new window.WebSocket(this._url, this._protocols);
      } catch (error) {
        throw new Error(error.message);
      } // установка свойств


      ['binaryType', 'extensions', 'protocol'].forEach(function (item) {
        if (typeof _this['_' + item] !== 'undefined') {
          _this._webSocket[item] = _this[item];
        }
      }); // добавление и выполнение событий

      this._executeCustomEvents('opening');

      this._addEventsFromStandardQueue(); // выполнение отправки отложенных сообщений


      this._webSocket.addEventListener('open', function (event) {
        _this._currentAttempts = 0;
        _this._currentReconnectionDelay = _this._options.reconnectionOptions.delay;

        _this._sendMessagesFromQueue();

        _this._executeCustomEvents('ready', event);
      }); // выполнение автоматического переподключения соединения


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
     * @throws {Error} ошибка проверки типа объекта для управление вебсокет-соединением
     */

  }, {
    key: "reconnect",
    value: function reconnect() {
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

  }, {
    key: "send",
    value: function send(data) {
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

  }, {
    key: "close",
    value: function close() {
      var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
      var reason = arguments.length > 1 ? arguments[1] : undefined;

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

  }, {
    key: "on",
    value: function on(eventType, handler) {
      if (_toConsumableArray(Main._standardEventTypes).concat(_toConsumableArray(Main._customEventTypes)).indexOf(eventType) > -1) {
        return this._eventHandlerRepository.add(new lib_EventHandler(eventType, handler));
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

  }, {
    key: "off",
    value: function off(key) {
      var result = false;

      switch (Main_typeof(key)) {
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

  }, {
    key: "_addEventsFromStandardQueue",
    value: function _addEventsFromStandardQueue() {
      var _this2 = this;

      Main._standardEventTypes.forEach(function (eventType) {
        _this2._webSocket.addEventListener(eventType, function (event) {
          _this2._eventHandlerRepository.getByEventType(eventType).forEach(function (eventHandler) {
            eventHandler.handler.call(_this2, event);
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

  }, {
    key: "_executeCustomEvents",
    value: function _executeCustomEvents(eventType) {
      var _this3 = this;

      var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this._eventHandlerRepository.getByEventType(eventType).forEach(function (eventHandler) {
        eventHandler.handler.call(_this3, event);
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
      var _this4 = this;

      this._messageRepository.getAll().forEach(function (message, index) {
        if (_this4._webSocket.readyState === window.WebSocket.OPEN) {
          _this4.send(message);

          _this4._messageRepository.deleteByIndex(index);
        }
      });
    }
  }, {
    key: "binaryType",
    get: function get() {
      if (this._webSocket instanceof window.WebSocket) {
        return this._webSocket.binaryType;
      } else if (typeof this._binaryType !== 'undefined') {
        return Main_typeof(this._binaryType);
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
        return Main_typeof(this._extensions);
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
        return Main_typeof(this._protocol);
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

  }], [{
    key: "_standardEventTypes",
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
    key: "_customEventTypes",
    get: function get() {
      return ['opening', 'closing', 'ready'];
    }
  }]);

  return Main;
}();

/* harmony default export */ var lib_Main = (Main_Main);
// CONCATENATED MODULE: ./index.js



/* harmony default export */ var index = __webpack_exports__["default"] = (lib_Main);

/***/ })
/******/ ]);
});
//# sourceMappingURL=wsc-2.0.0.js.map