import mongoose, { Schema } from 'mongoose';
import CommentSchema from './Comments.module'

const ArticleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 250,
        trim: true,
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        min: 3,
        max: 50,
        trim: true
    },
    date: {
        type: Date,
        default: new Date(),
    },
    imagePath: String,
    rating: {
        type: Number,
        default: 0,
    },
    Comments: [CommentSchema]

});




const Artcles = mongoose.model('Article', ArticleSchema);
export default Artcles; 