import jwt from 'jsonwebtoken'

const secretKey = process.env.SECRETKEY
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']
  if (!token) return res.status(400).send('token is required')
  try {
    jwt.verify(token, secretKey)
  } catch (err) {
    console.log('err:', err)
    return res.status(401).send('invalid token')
  }
  return next()
}

export default verifyToken
