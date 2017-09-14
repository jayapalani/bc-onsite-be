'use strict'

const createOne = require('../command/create-one')
const findById = require('../query/find-by-id')

module.exports = (req, res, next) => {
	const file = req.file
	const query = req.query
	const params = {name: file.originalname,
			size: file.size,
			projectId: query.projectId,
			type: 'FILE'
	}

    if (query.parentId == '') {
        query.parentId = query.projectId
    }
    params.parentId = query.parentId
	createOne(params)
		.then(createdProject => findById(createdProject._id))
		.then(project => res.json(project))
		.catch(next)
}