'use strict';

/** @constant {string} URL-адрес для установки вебсокет соединения. */
const WEBSOCKET_CONNECTION_URL = 'ws://echo.websocket.org';

/** @constant {string} URL-адрес для псевдо-установки вебсокет соединения. */
const WEBSOCKET_FAKE_CONNECTION_URL = 'ws://_.org';

(async () => {
    const {Wsc, wsc} = await require('./creation.js')(WEBSOCKET_CONNECTION_URL);
    require('./connection.js')(Wsc, wsc, WEBSOCKET_CONNECTION_URL);
    require('./reconnection.js')(Wsc, wsc);
    require('./sending.js')(Wsc, wsc);
    require('./disconnection.js')(Wsc, wsc);
    require('./fake_reconnection.js')(Wsc, WEBSOCKET_FAKE_CONNECTION_URL);
})();