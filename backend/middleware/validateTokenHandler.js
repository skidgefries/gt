
const jwt = require("jsonwebtoken");

module.exports.validateToken = async function validateToken (req, res, next){
  try{
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader) {
    // token = authHeader.split(" ")[1];
    token = authHeader;
    if (!token) {
      res.status(401);
      throw new Error("User is not authorized or token is missing");
    }
    jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
      if (err) {
        
        return res.status(401).json({error:"UnAuthorized"});
      }
      req.user = decoded.user;
      next();
    });

  }
}
catch(err){
  console.error("error ",err);
  return res.status(401).json({error:"UnAuthorized"});
}
};

