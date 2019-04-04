const http = require("http");
const getModule = require("./modules/getModule");
const postModule = require("./modules/postModule");

const port = 3456;

const app = http.createServer((req, res) => {
    switch (req.method) {
        case "GET":
            getModule.run(req, res);
            break;

        case "POST":
            postModule.run(req, res);
            break;
    
        default:
            res.end("invalid request");
    }

});



app.listen(port);
console.log(`New app is created and listen on ${port}`);