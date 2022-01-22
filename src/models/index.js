'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../../config/db.js')[env]
const db = {}

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  )
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    )
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

db.books = require('./book')(sequelize, Sequelize)
db.authors = require('./author')(sequelize, Sequelize)
db.kinds = require('./kind')(sequelize, Sequelize)
db.users = require('./user')(sequelize, Sequelize)

db.kinds.hasMany(db.books, {
  onDelete: 'CASCADE',
})
db.books.belongsTo(db.kinds, {
  onDelete: 'CASCADE',
})

db.books.belongsToMany(db.authors, {
  through: 'BookAuthor',
  onDelete: 'CASCADE',
})
db.authors.belongsToMany(db.books, {
  through: 'BookAuthor',
  onDelete: 'CASCADE',
})

module.exports = db
