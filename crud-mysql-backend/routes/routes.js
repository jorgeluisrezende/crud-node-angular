var controller = require('../controllers/DOAController');
module.exports = function (app){
app.get("/readAll", function(req, res){
    controller.lerAll(req, res);
});

app.get("/read/:nome?", function(req, res){
    var nome = req.params.nome;
    controller.ler(nome,req, res);
});
app.post("/create", function(req, res){
    var data = req.body;
    controller.criar(data,res);
});
app.delete("/delete/:nome?", function(req, res){
    var nome = req.params.nome;
    controller.apagar(nome,res);
});
app.put("/update/:nome?", function(req, res){
    var nome = req.params.nome;
    var data = req.body;
    controller.atualizar(data,nome,res);
});
}
