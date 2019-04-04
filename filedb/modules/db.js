const fsPromise = require("./fsPromise");
const path = require("path");
const dbDir = path.join(__dirname, "tables");
const ext = ".json";

const find = (table, options) => {
    const tablePath = path.join(dbDir, `${table}${ext}`);
    return new Promise((resolve, reject) => {
        fsPromise.readFile(tablePath)
            .then(data => {
                data = JSON.parse(data);
                if(Object.keys(options).length) {
                    data = filter(data, options);
                }
                resolve(JSON.parse(data));
            });
    });
};

const findSync = (table, options) => {
    const tablePath = path.join(dbDir, `${table}${ext}`);
    let data = JSON.parse(fsPromise.readFileSync(tablePath));
    if(Object.keys(options).length) {
        data = filter(data, options);
    }
    return data;
};

const filter = (table, options) => {
    const keys = Object.keys(options);
    const result = [];
    for(let i = 0; i < table.length; i++) {
        for(let j = 0; j < keys.length; j++) {
            if(table[i][keys[j]] === options[keys[j]]) {
                result.push(table[i]);
            }
        }
    }
    return result;
};

module.exports = {
    find,
    findSync
};