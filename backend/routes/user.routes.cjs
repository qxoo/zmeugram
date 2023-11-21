// import userController from '../controller/user.controller.cjs'

const Router = require('express')
const router = new Router()

const UserController = require('../controller/user.controller.cjs')

router.post('/user', UserController.CreateUser)
router.get('/user', UserController.getUser)
router.get('/user', UserController.getAllUsers)
router.put('/user', UserController.UpdateUser)
router.delete('/user', UserController``.DeleteUser)

module.exports = router
