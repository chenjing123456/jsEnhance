var mysql = require('mysql');

var pool = mysql.createPool({
            user:'root',
            password:'root',
            database:'web1702'
        });
pool.getConnection(function(err,connection){
            console.log('回调函数');
            if(err){
                throw err;
            }else {
                var sql = "select * from xk_clazz"
                connection.query(sql,function(err,results){
                    if(err){
                        throw err;
                    }else {
                        console.log(results);
                    }
                    pool.end();
                });
            }
        });
console.log('外部函数');
