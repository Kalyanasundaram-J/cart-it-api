const {validateToken} = require('../utils/auth')

exports.checkForToken = async function(req,res,next){
    const token = req.cookies['token'];
    if(!token) return next()

    try{
        await validateToken(token).then((val)=>{
            req.user = val
        })
        .catch(error=>console.log("\x1b[32m",error,"\x1b[0m"));
        next()
    }catch(error){
        next()
    }
}