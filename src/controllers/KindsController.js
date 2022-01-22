import db from '../models'

const Kind = db.kinds

const KindsController = {
  async index(req, res) {
    const result = await Kind.findAll({
      attributes: ['id', 'title'],
    })
    return res.json(result)
  },
}

export default KindsController
