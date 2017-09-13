'use strict'

const find = require('../query/find')

module.exports = (req, res, next) => {
	const query = {'projectId': req.query.projectId, 'parentId': req.query.projectId}
	find(query)
		.then(projects => res.json(projects))
		.catch(next)
}