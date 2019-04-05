const express = require("express");

const template = require("../modules/template");
const db = require("../modules/db");

const router = express.Router();

router.get('/', (req, res, next) => {
    db.getAll("costumers")
        .then(data => {
            template.render("index.html", {
                pageTitle: "Table",
                costumers: generateTable(data)
            })
            .then(html => {
                res.end(html);
            });
        });
});

const generateTable = (data) => {
    return data.map(costumer => Object.keys(costumer)
        .map(key => {
            const value = key === "totalOrder"
                ? `$ ${costumer[key]}`
                : costumer[key];
            return `<td>${value}</td>`
        })
        .join(""))
        .map(costCells => `<tr>${costCells}</tr>`)
        .join("");
}

module.exports = router;
