module.exports = function(connection, data, res){
      connection.query('DELETE FROM teste WHERE nome=? ',data, function(err, result){
            if(err){
              res.json(err);
            }else if(result){
              res.json({msg:"Deletado com sucesso"});
            }
      });
}
