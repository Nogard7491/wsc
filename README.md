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
npm install wsc --save
```

## Requiring

### Via tag "script"

```
<script src="./dist/wsc-1.0.0.min.js"></script>
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
    '', // protocols
);

// opening event handler
// triggered when trying to connect through a method call "connect"
wsc.onOpening(function(eventType) {
    console.log(eventType, this.readyState);
});

// open event handler
wsc.onOpen(function(eventType, event) {
    console.log(eventType, this.readyState);
});

// message event handler
wsc.onMessage(function(eventType, event) {
    console.log(eventType, this.readyState, '"' + event.data + '"');
    this.close();
});

// closing event handler
// triggered when trying to connect through a method call "close"
wsc.onClosing(function(eventType) {
    console.log(eventType, this.readyState);
});


// close event handler
wsc.onClose(function(eventType, event) {
    console.log(eventType, this.readyState);
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

// opening event handler
// triggered when trying to connect through a method call "connect"
wsc.onOpening(function(eventType) {
    console.log(eventType);
});

// closing event handler
// triggered when trying to connect through a method call "close"
wsc.onClosing(function(eventType) {
    console.log(eventType);
});

wsc.connect();
wsc.send('some data');

// open event handler
wsc.onOpen(function(eventType, event) {
    console.log(eventType, event);
});

// message event handler
wsc.onMessage(function(eventType, event) {
    console.log(eventType, event);
    this.close();
});

// close event handler
wsc.onClose(function(eventType, event) {
    console.log(eventType, event);
});
```

## Changelog

## License

[MIT](LICENSE.md)