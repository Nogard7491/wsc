'use strict';

import RepositoryElement from './RepositoryElement';

class Repository {

    /**
     * Создаёт экземпляр класса.
     */
    constructor() {
        this._elementId = 0;
        this._repository = [];
    }

    /**
     * Получает элемент из хранилища по его идентификатору.
     *
     * @param {number} id индекс элемента в хранилище
     * @return {*|null} элемент
     */
    getById(id) {
        let result = null;
        this._repository.forEach(repositoryElement => {
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
    getAll() {
        return this._repository.map(repositoryElement => {
            return repositoryElement.value;
        });
    }

    /**
     * Добавляет элемент в хранилище.
     *
     * @param {*} element элемент
     * @return {number} идентификатор элемента
     */
    add(element) {
        let repositoryElement = new RepositoryElement(++this._elementId, element);
        this._repository.push(repositoryElement);
        return repositoryElement.id;
    }

    /**
     * Удаляет элемент из хранилища по его идентификатору.
     *
     * @param {number} id идентификатор элемента
     * @return {boolean} результат выполнения операции
     */
    deleteById(id) {
        let result = false;
        this._repository.forEach((repositoryElement, index, repository) => {
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
    deleteByIndex(index) {
        if (typeof this._repository[index] !== 'undefined') {
            this._repository.splice(index, 1);
            return true;
        }
        return false;
    }

    /**
     * Очищает хранилище.
     */
    clear() {
        this._repository = [];
    }

    /**
     * Получает элементов хранилища.
     *
     * @return {number} количество элементов хранилища.
     */
    get length() {
        return this._repository.length;
    }
}

export default Repository;
