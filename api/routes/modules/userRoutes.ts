import {Router} from 'express'
const userRoutes = Router()
import verifyJWT from '../../middleware/auth'

import {createuser, finduserById, getAllusers, deleteUser, updateuser} from '../../controllers/userController'

userRoutes.get('/users', verifyJWT, getAllusers)
userRoutes.post('/users', verifyJWT, createuser)

userRoutes.route('/users/:id')
    .get(verifyJWT, finduserById)
    .put(verifyJWT, updateuser)
    .delete(verifyJWT, deleteUser)

export default userRoutes