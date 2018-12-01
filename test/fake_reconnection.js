'use strict';

const parallel = require('mocha.parallel');
const {assert} = require('chai');

let wsc;

module.exports = function (Wsc, websocketFakeConnectionUrl) {

    describe('Тестирование автоматического восстановления соединения', function () {

        describe('Тестирование создания экземпляра класса', function () {

            it('Создание экземпляра класса', function (done) {
                wsc = new Wsc(websocketFakeConnectionUrl, undefined, {
                    useMessageQueue: true,
                    reconnection: true,
                    reconnectionOptions: {
                        attempts: 1,
                        delay: 1000,
                        maxDelay: 1000,
                        increaseDelay: 0,
                    }
                });
                done();
            });
        });

        parallel('Тестирование цепочки событий указывающих на восстановление соединения', function () {

            it(`Попытка установки соединения с ложным URL-адресом`, function () {
                wsc.connect();
            });

            it('Установка и отработка пост установленного события "close"', function (done) {
                wsc.on('close', () => {
                    done();
                });
            });

            it('Установка и отработка пост установленного события "opening"', function (done) {
                wsc.on('opening', () => {
                    done();
                });
            });
        });
    });
};