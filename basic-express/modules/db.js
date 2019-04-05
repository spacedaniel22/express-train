const fs = require("fs");
const fileReader = require("./fileReader");
const path = require("path");
const dbDir = path.join(__dirname, "../db");
const defaultCostumer = require("../db/defaultCostumer");
const ext = ".json";

const getTablePath = (table) => {
    return path.join(dbDir, `${table}${ext}`);
};

const getAll = (table) => {
    const tablePath = getTablePath(table);
    return new Promise((resolve, reject) => {
        const all = fileReader.readFile(tablePath)
            .then(data => JSON.parse(data))
            .then(data => {
                resolve(data);
            });
        return all;
    });
};

const findByValue = (table, options) => {
        return new Promise((resolve, reject) => {
            getAll(table)
                .then(allData => {
                    let foundElement;
                    if (options && !Array.isArray(options) && Object.keys(options).length) {
                        const option = Object.keys(options)[0];
                        foundElement = allData.find(cost => cost[option] === options[option]) || defaultCostumer;
                    } else {
                        foundElement = defaultCostumer;
                    }
                    resolve(foundElement);
                });
    });
};

module.exports = {
    getAll,
    findByValue
}