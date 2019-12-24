
import 'express-async-errors';
import express from 'express';
import path from 'path';
import dbConnection from './config/dbConnection';
import Article from './routes/Articles'
import { ErrorHandeler } from "./middleware/ErrorHandler";
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3030;

process.on('uncaughtException', (err) => {
    console.log(err);

});

process.on('unhandledRejection', (err) => {
    console.log(err);

});

app.use(cors());
app.use("/images", express.static('src/images'));
app.use(express.json());
app.use('/api/articles', Article);
app.use(ErrorHandeler);

dbConnection();

app.listen(PORT, () => {
    console.log(`Server live on ${PORT}`);
})