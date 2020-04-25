var db = require("../models");

module.exports = function (app) {

    app.get("/", (req, res) => {
        db.List.findAll({})
            .then(dbList => {
                let restaurants = [];
                dbList.forEach(restaurant => {
                    let listItem =
                    {
                        id: restaurant.dataValues.id,
                        name: restaurant.dataValues.name,
                        beenThere: restaurant.dataValues.beenThere
                    };
                    restaurants.push(listItem);
                })
                res.render("index", { restaurant: restaurants });
            });
    });

    app.post("/api/list", (req, res) => {
        db.List.create({
            name: req.body.name,
            beenThere: req.body.beenThere
        })
            .then(dbList => { res.send(dbList) })
    });

    app.put("/api/list/:id", (req, res) => {
        console.log("==================== PUT request =================")
        console.log(req.body.beenThere);
        console.log(req.params.id);
        db.List.update(req.body,
            {
              where: {id: req.params.id}
            }
        ).then(dbList => { res.send('updated') })
    });

    app.delete("/api/list/:id", function (req, res) {
        db.List.destroy({
            where: { id: req.params.id }
        })
            .then(dbList => { res.json(dbList) });
    });


    // app.get("/api/list", function (req, res) {
    //     db.List.findAll({})
    //         .then(dbList => {
    //             let restaurants = [];
    //             dbList.forEach(restaurant => {
    //                 let listItem =
    //                 {
    //                     id: restaurant.dataValues.id,
    //                     name: restaurant.dataValues.name,
    //                     beenThere: restaurant.dataValues.beenThere
    //                 };
    //                 restaurants.push(listItem);
    //             })
    //             res.render("index", { restaurant: restaurants });
    //         });
    // });

    // app.get("/api/list/:id", function (req, res) {
    //     db.List.findAll({
    //         where: { id: req.params.id }
    //     })
    //         .then(dbList => {
    //             let restaurants = [];
    //             dbList.forEach(restaurant => {
    //                 let listItem =
    //                 {
    //                     id: restaurant.dataValues.id,
    //                     name: restaurant.dataValues.name,
    //                     beenThere: restaurant.dataValues.beenThere
    //                 };
    //                 restaurants.push(listItem);
    //             })
    //             res.render("index", { restaurant: restaurants });
    //         });
    // });

}