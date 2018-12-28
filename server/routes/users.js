var express = require('express');
var exec = require('child_process').exec;
var router = express.Router();

var chivesDao = require('../dao/chives-dao');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/compile', function (req, res, next) {
    console.log('compile start:', req.body);
    var body = req.body;
    var py = ' --module ' + body.module + ' --version ' + body.version + ' --branch ' + body.branch + ' --env_branch ' + body.env_branch + ' --mk ' + body.mk;
    exec('python /home/liuhao/workspace/script/compile.py' + py, {maxBuffer: 1024 * 1024}, function (error, stdout, stderr) {
        if (error) {
            console.error(`error: ${error}`);
            res.json({code: 1, msg: "编译失败"});
        } else {
            res.json({code: 0, msg: "编译成功"});
        }
    });
});

// 增加用户
//TODO 同时支持get,post
router.get('/addUser', function (req, res, next) {
    chivesDao.add(req, res, next);
});

router.get('/queryAll', function (req, res, next) {
    chivesDao.queryAll(req, res, next);
});

router.get('/query', function (req, res, next) {
    chivesDao.queryById(req, res, next);
});

router.get('/deleteUser', function (req, res, next) {
    chivesDao.delete(req, res, next);
});

router.post('/updateUser', function (req, res, next) {
    chivesDao.update(req, res, next);
});

module.exports = router;
