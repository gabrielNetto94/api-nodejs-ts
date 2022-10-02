import {Router} from 'express'

//controllers
import {login} from '../../controllers/loginController'

//validations
import {validate} from '../../middleware/handleValidation'
import {loginValidator} from '../../middleware/userValidation'

const authRoutes = Router()

authRoutes.post('/login', loginValidator(), validate, login)

export default authRoutes