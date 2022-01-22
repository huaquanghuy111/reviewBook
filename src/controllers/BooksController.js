import db from '../models'
import Validator from 'validatorjs'

const Book = db.books
const Kind = db.kinds
const Author = db.authors

const BooksController = {
  async index(req, res) {
    const validation = new Validator(req.params, { id: 'integer' })
    if (validation.fails())
      return res.status(400).json({ err: 'the URL incorrect' })
    const { id } = req.params
    const limitItem = 5
    const result = await Book.findAll({
      attributes: ['id', 'title', 'decription'],
      limit: limitItem,
      offset: (parseInt(id) - 1) * limitItem,
    })
    return res.json(result)
  },

  async indexAll(req, res) {
    const result = await Book.findAll({
      attributes: ['id', 'title'],
    })
    return res.json(result)
  },

  async show(req, res) {
    const validation = new Validator(req.params, { id: 'integer' })
    if (validation.fails())
      return res.status(400).json({ err: 'the URL incorrect' })
    const { id } = req.params
    const result = await Book.findByPk(id, {
      attributes: ['id', 'title', 'decription'],
    })
    return res.json(result)
  },

  async showByKinds(req, res) {
    const validation = new Validator(req.params, { id: 'integer' })
    if (validation.fails())
      return res.status(400).json({ err: 'the URL incorrect' })
    const { id } = req.params
    const result = await Book.findAll({
      attributes: ['id', 'title', 'decription'],
      include: {
        model: Kind,
        attributes: [['title', 'typeBook']],
        required: true,
      },
      where: { '$Kind.id$': id },
    })
    return res.json(result)
  },

  async showByAuthors(req, res) {
    const validation = new Validator(req.params, { id: 'integer' })
    if (validation.fails())
      return res.status(400).json({ err: 'the URL incorrect' })
    const { id } = req.params
    const result = await Book.findAll({
      attributes: ['id', 'title', 'decription'],
      include: {
        model: Author,
        where: { id: id },
      },
    })
    return res.json(result)
  },

  async store(req, res) {
    const validation = new Validator(req.body, {
      title: 'required',
      decription: 'required',
    })
    if (validation.fails()) return res.status(400).send(validation.errors.all())
    const { title, decription } = req.body
    const newBook = await Book.create({ title: title, decription: decription })
    console.log('id of newBook: ', newBook.id)
    return res.json(req.body)
  },

  async delete(req, res) {
    const { id } = req.params
    await Book.destroy({
      where: {
        id: id,
      },
    })
    return res.status(200).send('delete success')
  },

  async update(req, res) {
    const { id } = req.params
    const validation = new Validator(req.body, {
      title: 'required',
      decription: 'required',
    })
    if (validation.fails()) return res.status(400).json(validation.errors.all())
    const { title, decription } = req.body
    await Book.update(
      { title: title, decription: decription },
      {
        where: {
          id: id,
        },
      }
    )
    return res.status(200).send('update successfully')
  },
}

export default BooksController
