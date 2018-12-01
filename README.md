# Web Socket Client (wsc)

Wsc is simple to use, blazing fast and thoroughly tested websocket client.

## Table of contents

- [Installing](#installing)
- [Requiring](#requiring)
  - [Via tag "script"](#via-tag-script)
  - [Via Node.js require](#via-nodejs-require)
  - [Via ES6 import](#via-es6-import)
- [Usage examples](#usage-examples)
  - [Simple usage](#simple-usage)
  - [Usage with options](#usage-with-options)
- [Changelog](#changelog)
- [License](#license)

## Installing

```
npm install @nogard7491/wsc --save
```

## Requiring

### Via tag "script"

```
<script src="./dist/wsc-2.0.1.min.js"></script>
<script>
    var wsc = new Wsc.default('ws://echo.websocket.org');
</script>
```

### Via Node.js require

```
<script>
    const Wsc = require('wsc').default;

    const wsc = new Wsc('ws://echo.websocket.org');
</script>
```

### Via ES6 import

```
<script>
    import Wsc from 'wsc';

    const wsc = new Wsc('ws://echo.websocket.org');
</script>
```

## Usage examples

### Simple usage

```js
/** @type {Wsc} wsc Websocket client. */
var wsc = new Wsc.default(
    'ws://echo.websocket.org', // connecting url
    undefined, // protocols
);

// triggered when trying to connect through a method call "connect"
wsc.on('opening', function() {
    console.log('opening', this.readyState);
});

// triggered when opening a connection
wsc.on('open', function(event) {
    console.log('open', this.readyState);
});

// triggered when a message is received
wsc.on('message', function(event) {
    console.log('message', this.readyState, '"' + event.data + '"');
    this.close();
});

// triggered when trying to connect through a method call "close"
wsc.on('closing', function() {
    console.log('closing', this.readyState);
});


// triggered when closing a connection
wsc.on('close', function(event) {
    console.log('close', this.readyState);
});

wsc.connect();
wsc.send('some data');
```

### Usage with options

```js
/** @type {Wsc} wsc Websocket client. */
var wsc = new Wsc.default('ws://echo.websocket.org', undefined, {
    useMessageQueue: true, // use event queue with inactive connection
    reconnection: true, // use reconnection
    reconnectionOptions: { // reconnection options
        attempts: 10, // max number of reconnection attempts or Infinity
        delay: 1000, // reconnection delay time
        maxDelay: 10000, // max reconnection delay time
        increaseDelay: 1000, // delay time which will increase the main delay time when trying to reconnect
    }
});

// triggered when trying to connect through a method call "connect"
wsc.on('opening', function() {
    console.log('opening');
});

// triggered when trying to connect through a method call "close"
wsc.on('closing', function() {
    console.log('closing');
});

wsc.connect();
wsc.send('some data');

// triggered when opening a connection
wsc.on('open', function(event) {
    console.log('open', event);
});

// triggered when a message is received
wsc.on('message', function(event) {
    console.log('message', event);
    this.close();
});

// triggered when trying to connect through a method call "close"
let eventId = wsc.on('close', function(event) {
    console.log('close', event);
});

// removes event listener by identifier
wsc.off(eventId);

// removes event listeners by type
wsc.off('open');

// removes event listeners by handler
wsc.off(function() {
    console.log('closing');
});
```

## Changelog

### [v2.0.0 (2018-12-01)](https://github.com/Nogard7491/wsc/releases/tag/v2.0.0)

#### Added

- New methods "on" and "off" for adding and removing event listeners
- Getting event listener identifier

#### Removed

- Old methods "onOpening", "onOpen", "onReady", "onMessage", "onClosing",
"onClose" and "onError"

### [v1.0.0 (2018-11-25)](https://github.com/Nogard7491/wsc/releases/tag/v1.0.0)

## License

[MIT](LICENSE.md)