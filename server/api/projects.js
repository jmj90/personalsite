const router = require("express").Router();
const { Project } = require("../db/models");
module.exports = router;

// const adminGateway = (req, res, next) => {
//   if (req.user.isAdmin) {
// 		next()
// 	} else {
// 		next('Sorry, This feature can be used by admins only.')
// 	}
// }

// router.get('/', (req, res, next) => {
//   Project.findAll()
//     .then(projects => res.json(projects))
//     .catch(next)
// })

// router.post('/', (req, res, next) => {
//   Project.findOrCreate({
//     where: req.body
//   })
//   .then(project => res.json(project).status(200))
//   .catch(next)
// })

// router.put('/:id', (req, res, next) => {
//   let id = req.params.id
//   Project.findOne({
//     where: { id },
//   })
//   .then(product => {
//     product.update(req.body)
//   })
//   .then(() => res.json(req.body).status(200))
//   .catch(next)
// })
