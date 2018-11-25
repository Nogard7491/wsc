'use strict';

const {assert} = require('chai');

module.exports = function (websocketConnectionUrl) {

    return new Promise((resolve, reject) => {

        describe('Тестирование подключения класса и создания его экземпляра', function () {

            before(function () {
                this.jsdom = require('jsdom-global')();
            });

            it('Подключение класса', function () {
                this.Wsc = require('../').default;
            });

            it('Создание экземпляра класса', function () {
                this.wsc = new this.Wsc(websocketConnectionUrl);
                resolve({
                    Wsc: this.Wsc,
                    wsc: this.wsc
                });
            });
        });
    });
};