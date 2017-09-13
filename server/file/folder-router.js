'use strict'

const router = require('express').Router()  // eslint-disable-line new-cap
router.post('/', require('./handler/create.js'))
router.post('/:id/items', require('./handler/create.js'))

module.exports = router