'use strict'

const find = require('../query/find')

module.exports = (req, res, next) => {
    const query = {'parentId': req.params.id}
    find(query)
        .then(projects => res.json(projects))
        .catch(next)
}