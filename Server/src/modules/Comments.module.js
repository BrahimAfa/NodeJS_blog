import mongoose from 'mongoose';
const CommentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
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
    }

});

export default CommentSchema; 
