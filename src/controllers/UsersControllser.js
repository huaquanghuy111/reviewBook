import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import Validator from 'validatorjs'
import db from '../models'

const User = db.users
const sercretKey = process.env.SECRETKEY
const UsersController = {
  async register(req, res) {
    const validation = new Validator(req.body, {
      email: ['string', 'required'],
      username: 'required',
      password: 'required',
    })
    if (validation.fails()) return res.status(400).send(validation.errors.all())
    const { email, username, password } = req.body
    const checkExist = await User.findOne({
      where: {
        email: email,
      },
    })
    if (checkExist)
      return res.status(401).send('email is already, please login!')
    const encryptPassword = await bcrypt.hash(password, 10)
    await User.create({
      email: email,
      username: username,
      password: encryptPassword,
    })

    const token = jwt.sign({ data: null }, sercretKey, {
      algorithm: 'HS256',
      expiresIn: '2h',
    })

    return res.status(200).json({
      token: token,
    })
  },

  async login(req, res) {
    const validation = new Validator(req.body, {
      email: ['string', 'required'],
      password: 'required',
    })
    if (validation.fails()) return res.status(400).send(validation.errors.all())
    const { email, password } = req.body
    const checkEmailExist = await User.findOne({
      where: {
        email: email,
      },
    })
    if (!checkEmailExist)
      return res.status(401).send('email is not exist, please register')
    const checkPassword = await bcrypt.compare(
      password,
      checkEmailExist.password
    )
    if (!checkPassword) return res.status(401).send('password is incorrect')

    const token = jwt.sign({ data: null }, sercretKey, {
      algorithm: 'HS256',
      expiresIn: '2h',
    })

    return res.status(200).json({
      token: token,
    })
  },
}

export default UsersController
