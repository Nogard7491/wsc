'use strict';

class EventHandler {

    /**
     * Создаёт экземпляр класса.
     *
     * @param {string} eventType тип события
     * @param {Function} handler обработчик события
     */
    constructor(eventType, handler) {
        this._eventType = eventType;
        this._handler = handler;
    }

    /**
     * Получает тип события.
     *
     * @return {string} тип события
     */
    get eventType() {
        return this._eventType;
    }

    /**
     * Получает обработчик события.
     *
     * @return {Function} обработчик события
     */
    get handler() {
        return this._handler;
    }

    /**
     * Сравнивает текущий экземпляр класса с другим.
     *
     * @param {EventHandler} eventHandler экземпляр класса EventHandler
     * @return {boolean} результат сравнения
     */
    compareTo(eventHandler) {
        return (
            eventHandler instanceof EventHandler &&
            eventHandler.eventType === this._eventType &&
            eventHandler.handler.toString() === this._handler.toString()
        );
    }
}

export default EventHandler;