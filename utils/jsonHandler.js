const fs = require('fs');
const utils = require('../utils/utils');
/**
 * READ all records from a JSON file
 * @param { string } filePath 
 * @param { number } id
 * @returns Object
 */
exports.getDataById = function (filePath,id=null) {
    try {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        if(id && data[id]) {
            return data[id];
        }
        return data;
    }
    catch(e) {
        console.log(e)
        return false;
    }
}

/**
 * CREATE a new record in JSON file
 * @param { string } filePath
 * @param { object } newData
 * @return id|false
 */
exports.appendData = async function(filePath,newData) {
    try {
        const data = await JSON.parse(fs.readFileSync(filePath, 'utf8'));
        let currentDate = utils.getCurrentTimeStamp()
        if(newData['created_date'] == "") {
            newData['created_date'] = currentDate;
        }
        if(newData['updated_date'] == "") {
            newData['updated_date'] = currentDate;
        }
        newData.id = utils.generateRandomId();
        data[newData.id] = newData;
        await fs.writeFileSync(filePath, JSON.stringify(data));
        return newData.id
    }
    catch(e) {
        console.log(e)
        return false
    }
}

/**
 * UPDATE a record in a JSON file
 * @param { string } filePath - path of the JSON file
 * @param { number } id - id of the record
 * @param { object } updateData - data need to updae in object format
 * @returns boolean true|false - status of the function
 */
exports.updateData = function(filePath,id,updateData) {
    try {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        data[id] = updateData;
        fs.writeFileSync(filePath, JSON.stringify(data));
        return true
    }
    catch(e) {
        console.log(e)
        return false
    }
}

/**
 * DELETE a record from JSON file
 * @param { string } filePath - path of the JSON file
 * @param { number } id - id of the record need to delete.
 * @returns boolean true|false - status of the function
 */
exports.deleteData = function (filePath,id) {
    try {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        if (id && data[id]) {
            delete data[id];
            fs.writeFileSync(filePath, JSON.stringify(data));
        }
        else {
            return false
        }
        return true
    }
    catch(e) {
        console.log(e)
        return false
    }
}
