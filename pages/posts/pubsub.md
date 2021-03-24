---
title: mxttwoods/pubsub
date: 2021/3/15
description: A tiny, fast, zero-dependency event bus for
tag: Web Development
author: Matthew Woods
---

# @mxttwoods/pubsub

> [A tiny, fast, zero-dependency event bus for ](https://www.npmjs.com/package/@mxttwoods/pubsub)

## Installation

[@mxttwoods/pubsub](https://www.npmjs.com/package/@mxttwoods/pubsub)

Just download index.js, or use one of the following options:

```
yarn add @mxttwoods/pubsub
```

or

```
yarn add @mxttwoods/pubsub --registry=https://npm.pkg.github.com/mxttwoods
```

## Usage

Create an PubSub instance.

```
const emitter = new PubSub()
```

Then, add handlers as you see fit.

```
emitter.on('my-event', (data) => {
  alert('got ' + data)
})

emitter.on('my-event', (data) => {
  console.log('got ' + data)
})
```

Remove handlers using `off`.

```
function myHandler(data) {
  console.log(data)
}

emitter.on('my-event', myHandler)
emitter.off('my-event', myHandler)
```

Trigger events using `emit`.

```
// the second parameter here is the data you wish to
// pass to the event handlers
emitter.emit('my-event', { myHandler: 'Bar' })
```

If you want a handler to only run once, you can do this:

```
emitter.on('my-event', function myHandler() {
  emitter.off('my-event', myHandler)
  console.log('it worked')
})
```

You can register for multiple events at once like this:

```
function myHandler(data) {
  console.log(data)
}

emitter.on('event1 event2 etc', myHandler)
emitter.off('event1 event2 etc', myHandler)
```

Stopping propagation isn't build into PubSub. You can work around this
limitation by doing something like this:

```
function stopPropagation() {
  const superOn = PubSub.prototype.on

  PubSub.prototype.on = (names, fn) => {
    superOn.call(this, names, (data) => {
      if (!data.isCanceled) {
        return fn(data)
      }
      return true
    })
  }
}
stopPropagation()
```

With the above patch in place, you can do something like this in your event
handlers:

```
emitter.on('my-event', (data) => {
  // now, no downstream handlers will be invoked
  data.isCanceled = true
})
```

## License

This project is [MIT](https://github.com/mxttwoods/pubsub/blob/master/LICENSE) licensed.
