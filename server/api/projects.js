const router = require('express').Router()
const {Project} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Project.findAll()
    .then(projects => res.json(projects))
    .catch(next)
})
