import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/images/');
    },
    filename: (req, file, cb) => {
        cb(null, `${new Date().getTime()}-${file.originalname}`);
    }
});
//I can add filter here but it doesn't matter at this moment...

const upload = multer({
    storage, limits: {
        //Max Size 5mb
        fileSize: 1024 * 1024 * 5
    }
});

export default upload;