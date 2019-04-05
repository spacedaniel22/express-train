const express = require("express");
const path = require("path");
const port = 3456;

const app = express();

app.use(
    express.static(path.join(__dirname, "public"))
);

app.get("/", (req, res, next) => {
    const content = `
        <html>
            <head>
                <meta charset="utf8">
                <title>Static files</title>
                <link rel="stylesheet" href="main.css" />
            </head>
            <body>
              <h1>Statikus  fájlok</h1>
              <script src="main.js"></script>
            </body>
        </html>`
    res.send(content);
});

app.listen(port);