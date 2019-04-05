const express = require("express");
const path = require("path");

const indexRouter = require("./routes/index");
const customerRouter = require("./routes/costumer");
const port = 3456;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use('/', indexRouter);
app.use('/costumer', customerRouter);

app.listen(port, () => console.log(`Server is running in port: ${port}`));