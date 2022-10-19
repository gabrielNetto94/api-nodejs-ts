import {Router} from 'express'

import authRouter from './modules/authRoutes'
import moviesRouter from './modules/movieRoutes'
import userRouter from './modules/userRoutes'

const router = Router()

router.use(authRouter)
router.use(userRouter)
router.use(moviesRouter)

export default router