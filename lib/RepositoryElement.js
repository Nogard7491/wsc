'use strict';

class RepositoryElement {

    /**
     * Создаёт экземпляр класса.
     *
     * @param {number} id идентификатор элемента
     * @param {*} value значение элемента
     */
    constructor(id, value) {
        this._id = id;
        this._value = value;
    }

    /**
     * Получает идентификатор элемента.
     *
     * @return {number} идентификатор элемента
     */
    get id() {
        return this._id;
    }

    /**
     * Получает значение элемента.
     *
     * @return {*} значение элемента
     */
    get value() {
        return this._value;
    }

    /**
     * Устанавливает значение элемента.
     *
     * @param {*} value значение элемента
     */
    set value(value) {
        this._value = value;
    }
}

export default RepositoryElement;
