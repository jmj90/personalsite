const Sequelize = require('sequelize')
const db = require('../db')

const Project = db.define('project', {
  title: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.STRING
  },
  deployLink: {
    type: Sequelize.STRING
  },
  videoLink: {
    type: Sequelize.STRING
  },
  githubLink: {
    type: Sequelize.STRING
  },
  imgUrl: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  roles: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: []
  },
  tech: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: []
  },

})

module.exports = Project
