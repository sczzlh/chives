// CRUD SQL语句
var chives = {
    insert: 'INSERT INTO chives(name, age) VALUES(?,?)',
    update: 'update chives set name=?, age=? where id=?',
    delete: 'delete from chives where id=?',
    queryById: 'select * from chives where id=?',
    queryAll: 'select * from chives'
};

module.exports = chives;