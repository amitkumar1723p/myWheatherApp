import express from 'express'
const router = express.Router()
import wheatherController from '../Controller/wheatherController.js'

router.get('/', wheatherController.homepage)
router.get('/about', wheatherController.aboutpage)
router.get('/about/*', wheatherController.mainerror404page)
router.get('/wheather', wheatherController.wheatherpage)
router.get('/wheather/*', wheatherController.wheather404errorpage)

router.get('*', wheatherController.about404errorpage)

export default router
