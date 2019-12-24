import mongoose from 'mongoose';

const setEvents = () => {
    mongoose.connection.once('open', () => console.log('Database Connected...'));
    mongoose.connection.on('error', (err) => console.log(err));
}

 const dbConnect = async () => {
    
    setEvents();
    try {
        await mongoose.connect('mongodb://localhost/ArticleDB',
            {
                useCreateIndex: true,
                useUnifiedTopology: true,
                useNewUrlParser: true
            });
    } catch (err) { console.log(err); }


}

export default dbConnect