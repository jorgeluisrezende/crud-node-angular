module.exports.readAll = function(connection, res){

      connection.query('SELECT * FROM teste',function(err, result){
            if(err){
                return res.json(err);
            }

              return res.json(result);

      });
}
module.exports.read = function(connection, res,nome){

      connection.query('SELECT * FROM teste WHERE nome=?',nome,function(err, result){
            if(err){
                return res.json(err);
            }
                return res.json(result);
      });
}
