import express from 'express';
import Articles from '../modules/Articles.module'
import upload from '../config/upload-Images'
const Article = express.Router();

Article.route('/').get(async (req, res) => {
    const articles = await Articles.find();
    res.status(200).json(articles);
});

Article.route('/add').post(upload.single("ImageArticle"), async (req, res) => {
    //console.log(req.body);
    const { name, content, author } = req.body;
    const imagePath = req.file !== undefined ? req.file.filename : "deafult.png";
    // console.log(imagePath);
    const article = await new Articles({ name, content, author, imagePath });
    const doc = await article.save();
    res.status(200).json(doc);
});

Article.route('/:id').get(async (req, res) => {
    const id = req.params.id;
    const article = await Articles.findOne({ _id: id });
    console.log(article._id);

    if (!article) return res.status(404).json({ id, error: "The Article you are looking for does not exist" });
    res.status(200).json(article);
});

Article.route('/:id/rating').post(async (req, res) => {
    const { incValue } = req.body;
    const article = await Articles.findOneAndUpdate({ _id: req.params.id }, {
        $inc:
        {
            rating: incValue
        }
    }, { new: true });
    if (!article) return res.status(400).json({ id, error: "The Article you are looking for does not exist" });
    res.status(200).json(article);

});

Article.route('/:id/comments').post(async (req, res) => {
    console.log(req.body);

    // const { content, author, email } = ;
    // const cmt = {
    //     content,
    //     author,
    //     email
    // };

    // console.log(cmt);
    const article = await Articles.findOneAndUpdate({ _id: req.params.id },
        {
            $push:
            {
                Comments: req.body
            }
        }, { new: true, useFindAndModify: false });


    res.status(200).json(article.Comments);
});
Article.route('/comments').get(async (req, res) => {
    const comments = await Articles.find().select('comments');
    res.status(200).json(comments);
});

export default Article;