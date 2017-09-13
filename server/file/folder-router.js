'use strict'

const router = require('express').Router()  // eslint-disable-line new-cap
router.post('/', require('./handler/create-folder.js'))
router.get('/:id/items', require('./handler/find-subfolders'))

module.exports = router