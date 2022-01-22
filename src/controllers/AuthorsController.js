import db from '../models'

const Author = db.authors

const AuthorsController = {
  async index(req, res) {
    const result = await Author.findAll({
      attributes: ['id', 'name'],
    })
    return res.json(result)
  },
}

export default AuthorsController
