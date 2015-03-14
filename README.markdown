# fd-append

[![Build Status](https://travis-ci.org/fp-dom/fd-append.svg)](https://travis-ci.org/fp-dom/fd-append) [![npm version](https://badge.fury.io/js/fd-append.svg)](http://badge.fury.io/js/fd-append)
> append DOM element in a functional way.


## Installation

`npm install fd-append --save`

## Usage

```js
let append = require('fd-append')
    , elem = require('fd-elem')
    , appendtoBody = append(document.body);

let p = elem('p', 'Meow');

appendtoBody(p);

assert.equal(document.body.lastChild.innerText, 'Meow'); // true.
```

## API

```
append :: parent -> child
```

A curried function that takes in:

* parent -> DOM element to which the child must be appended.

* child  -> DOM element that needs to be appended.



