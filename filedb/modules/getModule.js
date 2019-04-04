const template = require("./template");
const fsPromise = require("./fsPromise");
const db = require("./db");

const run = (req, res) => {
    const users = db.findSync("users", { id: 0 });
    template.render("index.html", {
        title: "yellowRoad students",
        pageTitle: "yellowRoad, a legjobb út a sikerhez",
        users: JSON.stringify(users, null, 4)
    })
    .then(html => {
        res.end(html);
    });
};

module.exports = {
    run
};