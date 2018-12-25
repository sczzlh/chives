var express = require('express');
var router = express.Router();

var chivesDao = require('../dao/chives-dao');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 增加用户
//TODO 同时支持get,post
router.get('/addUser', function(req, res, next) {
    chivesDao.add(req, res, next);
});

router.get('/queryAll', function(req, res, next) {
    chivesDao.queryAll(req, res, next);
});

router.get('/query', function(req, res, next) {
    chivesDao.queryById(req, res, next);
});

router.get('/deleteUser', function(req, res, next) {
    chivesDao.delete(req, res, next);
});

router.post('/updateUser', function(req, res, next) {
    chivesDao.update(req, res, next);
});

module.exports = router;
