const crypto = require("crypto");

/**
 * Get the current time stamp in DD-MM-YYY HH:mm:SS format
 */
exports.getCurrentTimeStamp = function () {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1; // JavaScript months start at 0
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const timestamp = `${day}-${month}-${year} ${hour}:${minutes}:${seconds}`;

    return timestamp;
}

/**
 * It will return a 128-bit unique id
 * @returns uuid - Return a unique id
 */
exports.generateRandomId = function generateRandomId() {
    const uuid = crypto.randomUUID();
    return uuid;
}