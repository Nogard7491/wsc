'use strict';

import Repository from './Repository';
import RepositoryElement from './RepositoryElement';
import EventHandler from './EventHandler';

class EventHandlerRepository extends Repository {

    /**
     * Создаёт экземпляр класса.
     */
    constructor() {
        super();
    }

    /**
     * Добавляет элемент в хранилище.
     *
     * @param {EventHandler} eventHandler элемент
     * @return {number} идентификатор элемента
     */
    add(eventHandler) {
        return super.add(eventHandler);
    }

    /**
     * Получает элементы из хранилища по типу события.
     *
     * @param {string} eventType тип события
     * @return {Array} элементы хранилища
     */
    getByEventType(eventType) {
        return this.getAll().filter(eventHandler => eventHandler.eventType === eventType);
    }

    /**
     * Получает элементы из хранилища по обработчику события.
     *
     * @param {Function} handler обработчик события
     * @return {Array} элементы хранилища
     */
    getByHandler(handler) {
        return this.getAll().filter(eventHandler => eventHandler.handler.toString() === handler.toString());
    }

    /**
     * Проверяет наличие элементов в хранилище по типу события.
     *
     * @param {string} eventType тип события
     * @return {boolean} результат проверки
     */
    hasByEventType(eventType) {
        return Boolean(this.getByEventType(eventType).length);
    }

    /**
     * Проверяет наличие элементов в хранилище по обработчику события.
     *
     * @param {Function} handler обработчик события
     * @return {boolean} результат проверки
     */
    hasByHandler(handler) {
        return Boolean(this.getByHandler(handler).length);
    }

    /**
     * Удаляет элементы из хранилища по типу события.
     *
     * @param {string} eventType тип события
     * @return {boolean} результат выполнения операции
     */
    deleteByEventType(eventType) {
        let result = false;
        this._repository.forEach(repositoryElement => {
            let eventHandler = repositoryElement.value;
            if (eventHandler.eventType === eventType && this.deleteById(repositoryElement.id)) {
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
    deleteByHandler(handler) {
        let result = false;
        this._repository.forEach(repositoryElement => {
            let eventHandler = repositoryElement.value;
            if (eventHandler.handler.toString() === handler.toString() && this.deleteById(repositoryElement.id)) {
                result = true;
            }
        });
        return result;
    }
}

export default EventHandlerRepository;
