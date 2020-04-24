var db = require("../models");

module.exports = function(app) {

    app.post("/api/list", (req, res) => {
        console.log(req.body)
    });

    app.get("/api/list", function(req, res) {
        db.List.findAll({})
        .then(dbList => {res.json(dbList);
        });        
    });

    app.get("/api/list/:id", function(req, res) {
        db.List.findAll({
            where: {id: req.params.id}
        })
        .then(dbList => {res.json(dbList)});
    });

    app.put("/api/list/:id", (req, res) => {
        db.List.update({
            beenThere: req.body.body,
            where: {id: req.params.id}
        })
        .then(dbList => {res.json(dbList)})
    });

    app.delete("/api/list/:id", function(req, res) {
        db.List.destroy({
            where: {id: req.params.id}
        })
        .then(dbList => {res.json(dbList)});
    });

    



// bottom of module.exports 
}