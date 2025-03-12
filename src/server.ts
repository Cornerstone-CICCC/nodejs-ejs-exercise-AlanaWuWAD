import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import pageRouter from './routes/page.routes'
dotenv.config()

const app = express()

//MW
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'../src/views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

//Routes
app.use('/',pageRouter)

// 404
app.use((req, res)=>{
    res.status(404).send(`404 Error`)
})

//start server
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Server is ${PORT}`)
})
