'use strict';

const parallel = require('mocha.parallel');
const {assert} = require('chai');

module.exports = function (Wsc, wsc) {

    parallel('Тестирование переподключения соединения', function () {

        it('Установка и отработка предустановленного события "close"', function (done) {
            wsc.onClose(eventType => {
                assert.equal(eventType, 'close');
                done();
            });
        });

        it('Установка и отработка предустановленного события "open"', function (done) {
            wsc.onOpen(eventType => {
                assert.equal(eventType, 'open');
                done();
            });
        });

        it('Переподключение соединения', function () {
            wsc.reconnect();
        });
    });
};