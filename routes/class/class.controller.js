const db = require('../../models/mongoConnect');

exports.classIndex = (req, res, next) => {
    db.findClass(req.params.class, (err, resdb) => {
        res.send(resdb);
    });
};

exports.create = (req, res, next) => {
    db.createClass(req.body.pid, req.body.title, err => {
        if (err) res.sendStatus(400);
        else res.sendStatus(200);
    });
}

exports.add = (req, res, next) => {
    db.addClass(req.body.pid, req.params.class, err => {
        if (err) res.sendStatus(400);
        else res.sendStatus(200);
    });
};

exports.addLecture = (req, res, next) => {
    db.createLecture(req.body.pid, req.params.class, req.body.title, req.body.desc, req.body.youtube, req.body.keyword, err => {
        console.log(err);
        if (err) res.sendStatus(400);
        else res.sendStatus(200);
    });
}