const express = require("express");

const db = require("../modules/db");
const template = require("../modules/template");

const router = express.Router();

router.get('/:id?', (req, res, next) => {
    db.findByValue("costumers", {
        id: req.params.id
    }).then(costumer => {
        template.render("costumer.html", {
            pageTitle: `Costumer ${ req.params.id || "" }`,
            ...costumer
        })
        .then(html => {
            res.end(html);
        });
    })
});

module.exports = router;
