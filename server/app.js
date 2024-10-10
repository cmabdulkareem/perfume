import express from 'express'
import dotenv from 'dotenv'
import './config/db.js'
import cors from 'cors'
import session from 'express-session'
import cookieparser from 'cookie-parser'
import fileUpload from 'express-fileupload'

import userRouter from './routes/userRoutes.js'

dotenv.config()


const app =express()
const PORT =process.env.PORT || 3000

const corsOptions = {
  origin: "https://perfume-black.vercel.app",  L
  methods: "GET,POST,HEAD,PUT,PATCH,DELETE",   
  credentials: true,                          
  allowedHeaders: "Content-Type, Authorization"
};

app.use(cors(corsOptions));

app.use(cors(corsOptions))
app.use(express.static("public"))
app.use(fileUpload())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieparser())
app.use(session({
  secret: "secret",                     // Use a strong secret for production
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production', // Only use secure cookies in production
    maxAge: 1000 * 60 * 60 * 24          // 1 day
  }
}));


// app.options('*', cors())

app.use('/',userRouter)

app.listen(PORT,()=>{
  console.log(`listening ${PORT}`)
  
})
