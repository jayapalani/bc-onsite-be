'use strict'

const model = require('../mongo/model')

module.exports = data => {
	return model
		.create(data)
		.catch(function (error) {
			console.log(error)
        })
		.call('toObject')
}