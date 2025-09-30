'use strict'

const assert = require('assert')

const isGeneratorFunction = require('is-generator-function')

function * handle (next) {
  yield next
}

assert.ok(isGeneratorFunction(handle))
