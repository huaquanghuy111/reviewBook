import express from 'express'
import KindsController from '../controllers/KindsController'
import AuthorsController from '../controllers/AuthorsController'
import BooksController from '../controllers/BooksController'
import UsersController from '../controllers/UsersControllser'
import auth from '../middleware/authMiddleware'

const router = express.Router()

router.get('/kinds', KindsController.index)
router.get('/authors', AuthorsController.index)
router.get('/books', auth, BooksController.indexAll)
router.get('/books/page/:id', BooksController.index)
router.get('/books/:id', BooksController.show)
router.get('/books/kinds/:id', BooksController.showByKinds)
router.get('/books/authors/:id', BooksController.showByAuthors)

router.post('/books', BooksController.store)
router.delete('/delete/:id', BooksController.delete)
router.put('/books/update/:id', BooksController.update)

router.post('/users/register', UsersController.register)
router.post('/users/login', UsersController.login)

export default router
