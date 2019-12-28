
import 'express-async-errors';
import express from 'express';
import path from 'path';
import dbConnection from './config/dbConnection';
import Article from './routes/Articles'
import { ErrorHandeler } from "./middleware/ErrorHandler";
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
const app = express();
const PORT = process.env.PORT || 3030;

//i'll change this later in seperate firl in config
fs.mkdir("./src/images", (err) => {
    if (err.code !== "EEXIST") return console.log(err);
    console.log("Folder Created Successfully")
});

// for uncaught Exception out side Routes
process.on('uncaughtException', (err) => {
    console.log(err);

});
// fro Prmise Rejections
process.on('unhandledRejection', (err) => {
    console.log(err);

});
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/images", express.static('src/images'));

app.use('/api/articles', Article);
app.use(ErrorHandeler);

dbConnection();

app.listen(PORT, () => {
    console.log(`Server live on ${PORT}`);
})