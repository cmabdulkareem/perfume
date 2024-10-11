import express from 'express';
import dotenv from 'dotenv';
import './config/db.js';
import cors from 'cors';
import session from 'express-session';
import cookieparser from 'cookie-parser';
import MongoStore from 'connect-mongo';
import fileUpload from 'express-fileupload';

import userRouter from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.set('trust proxy', 1)

const sessionStorage = MongoStore.create({
    mongoUrl: 'mongodb+srv://kareem:kar123@sample.kvxwkea.mongodb.net',
    dbName: 'perfume',
    collectionName: 'sessions',
    ttl: 24 * 60 * 60,
    autoRemove: 'native'
});

const corsOptions = {
    origin: "https://perfume-black.vercel.app",
    methods: "GET,POST,HEAD,PUT,PATCH,DELETE",
    credentials: true,
    allowedHeader: "Content-Type, Authorization"
};

app.use(cors(corsOptions));
app.use(express.static("public"));
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieparser());
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    store: sessionStorage,
    cookie: {
        secure: true,
        maxAge: 1000*60*60*24
    }
}));

app.use('/', userRouter);

app.listen(PORT, () => {
    console.log(`listening ${PORT}`);
});
