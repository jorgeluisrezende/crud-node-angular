var connection = require('../config/DbConfig');
var create = require('../models/createModel');
var read = require('../models/readModel');
var update = require('../models/updateModel');
var del = require('../models/deleteModel');

module.exports.criar = function(data,res){
        create(connection,data,res);
    }

module.exports.lerAll = function(data, res){
      read.readAll(connection,res);
    }
module.exports.ler = function(nome,req, res){
          read.read(connection,res,nome);
    }
module.exports.atualizar = function(data,nome,res){
        update(connection,data,nome,res);
    }

module.exports.apagar = function(data, res){
        del(connection,data,res);
    }
