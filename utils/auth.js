const jwt = require("jsonwebtoken");
const jsonHandle = require("./jsonHandler");
const userJsonPath = "./JSON_DB/users.json";

const SEC_KEY = process.env.JWT_SEC_KEY;

/**
 * Generate Token using USER Detail
 * @param {string} id - Id of the user need to create Token
 * @returns token
 */
async function generateTokenForUser(id) {
    try{
        const user = await jsonHandle.getDataById(userJsonPath,id);
        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin
        }
        const token = jwt.sign(payload,SEC_KEY);
        return token;
    }catch(error) {
        throw new Error(error) 
    }
}

/**
 * Validate the token
 * @param {string} token - Token generated by user detail
 * @returns 
 */
async function validateToken(token){
    return jwt.verify(token,SEC_KEY);
}

module.exports = {
    generateTokenForUser,
    validateToken
}