'use strict';

const parallel = require('mocha.parallel');
const {assert} = require('chai');

module.exports = function (Wsc, wsc, websocketConnectionUrl) {

    parallel('Тестирование установки соединения и соответствующих событий', function () {

        it('Установка и отработка предустановленного события "opening"', function (done) {
            wsc.on('opening', () => {
                done();
            });
        });

        it('Установка и отработка предустановленного события "open"', function (done) {
            wsc.on('open', () => {
                done();
            });
        });

        it('Установка и отработка предустановленного события "ready"', function (done) {
            wsc.on('ready', () => {
                done();
            });
        });

        it(`Установка соединения с ${websocketConnectionUrl}`, function () {
            wsc.connect();
        });

        it('Установка и отработка пост установленного события "open"', function (done) {
            wsc.on('open', function (event) {
                assert.instanceOf(this, Wsc);
                done();
            });
        });

        it('Установка и отработка пост установленного события "ready"', function (done) {
            wsc.on('ready', function (event) {
                assert.instanceOf(this, Wsc);
                done();
            });
        });
    });
};