'use strict';

const parallel = require('mocha.parallel');
const {assert} = require('chai');

module.exports = function (Wsc, wsc, websocketConnectionUrl) {

    parallel('Тестирование установки соединения и соответствующих событий', function () {

        it('Установка и отработка предустановленного события "opening"', function (done) {
            wsc.onOpening(eventType => {
                assert.equal(eventType, 'opening');
                done();
            });
        });

        it('Установка и отработка предустановленного события "open"', function (done) {
            wsc.onOpen(eventType => {
                assert.equal(eventType, 'open');
                done();
            });
        });

        it('Установка и отработка предустановленного события "ready"', function (done) {
            wsc.onReady(eventType => {
                assert.equal(eventType, 'ready');
                done();
            });
        });

        it(`Установка соединения с ${websocketConnectionUrl}`, function () {
            wsc.connect();
        });

        it('Установка и отработка пост установленного события "open"', function (done) {
            wsc.onOpen(function (eventType, event) {
                assert.equal(eventType, 'open');
                assert.instanceOf(this, Wsc);
                done();
            });
        });

        it('Установка и отработка пост установленного события "ready"', function (done) {
            wsc.onReady(function (eventType, event) {
                assert.equal(eventType, 'ready');
                assert.instanceOf(this, Wsc);
                done();
            });
        });
    });
};