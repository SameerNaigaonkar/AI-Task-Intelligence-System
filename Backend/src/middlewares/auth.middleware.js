// const jwt = require("jsonwebtoken");





// const Protect = async (req,res,next) => {
    
//     console.log("AUTH HEADER:", req.headers.authorization);



//     const authHeader = req.headers.authorization ;

//     if(!authHeader || !authHeader.startsWith("Bearer ")){
//         return res.status(401).json({
//             message:"Access Denied" || "Unauthorized"
//         })
//     }

//     const token = authHeader.split(" ")[1];
    
//     try{
        
        
//         const decode = jwt.verify(token,process.env.JWT_Secret_Key);
//         console.log("DECODED USER:", decode);
      
//         req.user = decode ;
//         next();
        
//     }catch (error){
//         res.status(401).json({
//             message:"Invalid token"
//         })

//     }
    
// }


const jwt = require("jsonwebtoken");


const Protect = async (req, res, next) => {
 
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "No auth header" });
  }

  const token = req.headers.authorization.split(" ")[1];
  

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = decoded;
    next();
  } catch (error) {
    console.log("JWT ERROR:", error.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};

// module.exports = Protect;



// const allowRoles = (...role)=>{
//     return (req,res,next)=>{
//    if(!role.includes(req.user.role)){
//     return res.status(403).json({
//         message:"Access Denied"
//     })
//    }
//    next();


//     }
// }

const allowRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access Denied"
      });
    }
    next();
  };
};



module.exports = {Protect,allowRoles} ;