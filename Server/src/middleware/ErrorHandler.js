export function ErrorHandeler(err, req, res, next) {
    //log err message if nedded
    res.status(500).json({ error: err.message, ok: 0 });
    console.log("FATAL-ERROR 500 : ", err.message);


}