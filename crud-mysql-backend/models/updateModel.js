module.exports = function(connection, data,nome, res){
      connection.query('UPDATE teste SET ? WHERE nome=? ',[data, nome], function(err, result){
        
            if(err){
              res.json(err);
            }else if(result) {
              res.json({msg: "Registro atualizado com sucesso"})
            }
      });
}
