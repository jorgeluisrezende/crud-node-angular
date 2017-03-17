module.exports = function(connection, data, res){
      connection.query('INSERT INTO teste SET ?', data, function(err, result){
            if(err){
              res.json(err);
              return;
            }else if(result){
                res.json({msg:"Cadastrado com sucesso"})
            }
      });
}
