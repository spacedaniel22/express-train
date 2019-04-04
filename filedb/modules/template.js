const fsPromise = require("./fsPromise");
const path = require("path");
const viewDir = path.join(__dirname, "../views");

const render = (name, vars = {}) => {
    return new Promise((resolve, reject) => {
        const filePath = path.join(viewDir, name);
        fsPromise.readFile(filePath)
            .then((data) => {
                const html = includeVars(data, vars);
                resolve(html);
            }, (error) => {
                resolve(`error: ${error.toString()}`);
            });
    });
};

const includeVars = (html, vars) => {
    for(let k in vars) {
        const reg = RegExp("\\$\\{[ ]*"+k+"[ ]*(\\}){1}", "g");
        html = html.replace(reg, vars[k]);
    }
    return html;
};

module.exports = {
    render
};