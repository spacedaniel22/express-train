const fs = require("fs");
const path = require("path");

class FileHandler {
    static readFile(filePath, encoding = "utf8", callback) {
        if(callback && typeof callback === "function") {
            return fs.readFile(filePath, encoding, callback);
        }
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, encoding, (err, data) => {
                if(err) {
                    return reject(err);
                }
                resolve(data);
            })
        });
    }

    static readFileSync( filePath, encoding = "utf8") {
        return fs.readFileSync(filePath, encoding);
    }
}

module.exports = FileHandler;