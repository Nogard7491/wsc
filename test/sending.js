'use strict';

const parallel = require('mocha.parallel');
const {assert} = require('chai');

const MESSAGE_DATA = 'some data';

module.exports = function (Wsc, wsc) {

    parallel('Тестирование отправки сообщений и соответствующих событий', function () {

        it(`Установка и отработка псевдо предустановленного события "message", получение сообщения "${MESSAGE_DATA}"`, function (done) {
            wsc.on('message', (event) =>  {
                assert.equal(event.data, MESSAGE_DATA);
                done();
            });
        });

        it(`Отправка сообщения "${MESSAGE_DATA}"`, function (done) {
            wsc.send(MESSAGE_DATA);
            done();
        });

        it(`Установка и отработка пост установленного события "message", получение сообщения "${MESSAGE_DATA}"`, function (done) {
            wsc.on('message', function (event) {
                assert.equal(event.data, MESSAGE_DATA);
                assert.instanceOf(this, Wsc);
                done();
            });
        });
    });
};