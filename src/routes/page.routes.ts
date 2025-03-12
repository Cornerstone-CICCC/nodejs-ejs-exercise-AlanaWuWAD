import { Router, Request, Response } from "express";

const pageRouter = Router()

pageRouter.get('/', (req, res)=>{
    res.status(200).render('home'{
        title:"Home page"
    })
})

pageRouter.get('/about', (req, res)=>{
    res.status(200).render('about',{
        title:"About"
    })
})

pageRouter.get('/contact',(req, res)=>{
    res.status(200).render('contact',{
        title:"Contact"
    })
})

export default pageRouter