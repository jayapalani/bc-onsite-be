'use strict'

const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    dateModified: {
        type: Date,
        default: Date.now,
    },
    name: {
        required: true,
        type: String,
    },
	size: {
        type: Number,
        default: 0,
	},
	parentId: {
        required: true,
		type: mongoose.Schema.Types.ObjectId,
	},
	projectId: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
    },
	type: {
        required: true,
		type: String,
		enum: ['FILE', 'FOLDER'],
	},
})

module.exports = mongoose.model('File', schema)