'use strict'

const createOne = require('../command/create-one')
const findById = require('../query/find-by-id')

module.exports = (req, res, next) => {
	console.log('*********************************************************')
	const params = {}
	params.name = req.body.name;
	params.projectId = req.query.projectId;
	params.type = 'FOLDER'
	console.log(params)
	createOne(params)
		.then(createdProject => findById(createdProject._id))
		.then(project => res.json(project))
		.catch(next)
}