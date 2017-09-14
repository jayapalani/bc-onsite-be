'use strict'

const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	dateCreated: {
		type: Date,
		default: Date.now,
	},
	name: {
		required: true,
		type: String,
		unique: true,
	},
})

module.exports = mongoose.model('Project', schema)