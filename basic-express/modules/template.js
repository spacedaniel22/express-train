const fsPromise = require("./fileReader");
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
    Object.keys(vars).forEach((value) => {
        const reg = RegExp("\\$\\{[ ]*"+ value +"[ ]*(\\}){1}", "g");
        html = html.replace(reg, vars[value]);
    });
    return html;
};

module.exports = {
    render
};