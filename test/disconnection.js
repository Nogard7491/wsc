'use strict';

const parallel = require('mocha.parallel');
const {assert} = require('chai');

module.exports = function (Wsc, wsc) {

    parallel('Тестирование сброса соединения и соответствующих событий', function () {

        it('Установка и отработка предустановленного события "closing"', function (done) {
            wsc.on('closing', () => {
                done();
            });
        });

        it('Установка и отработка предустановленного события "close"', function (done) {
            wsc.on('close', () => {
                done();
            });
        });

        it('Сброс соединения', function () {
            wsc.close();
        });

        it('Установка и отработка пост установленного события "close"', function (done) {
            wsc.on('close', function (event) {
                assert.instanceOf(this, Wsc);
                done();
            });
        });
    });
};