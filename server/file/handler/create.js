'use strict'

const createOne = require('../command/create-one')
const findById = require('../query/find-by-id')

module.exports = (req, res, next) => {
	const params = {}
	const file = req.file
	const query = req.query
	params.name = file.originalname
	params.size = file.size
	params.projectId = query.projectId
	params.type = 'FILE'
    if (query.parentId == '') {
        query.parentId = query.projectId
    }
    params.parentId = query.parentId
	createOne(params)
		.then(createdProject => findById(createdProject._id))
		.then(project => res.json(project))
		.catch(next)
}