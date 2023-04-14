import express from 'express'

const app = express()
import { join } from 'path'
import router from '../router/routerapp.js'
import hbs from 'hbs'

//  Server static file  from public folder 
app.use(express.static(join(process.cwd(), 'public')))
app.use('/wheather', express.static(join(process.cwd(), 'public')))
app.use('/about', express.static(join(process.cwd(), 'public')))

//  
app.set('view engine', 'hbs')
app.set('views', join(process.cwd(), 'Templatefiles', 'views'))

hbs.registerPartials(join(process.cwd(), 'Templatefiles', 'Commoncode'))

//  load router  
app.use('/', router)
//  Define port 
const port = process.env.Port || 5000
app.listen(port, "localhost", () => {
})

