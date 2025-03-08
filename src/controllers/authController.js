import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const authController = {
    //REGISTER
    registerUser: async(req, res)=> {
        try{
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            //CREATE NEW USER
            const newUser = await new User({
              username: req.body.username,
              email: req.body.email,
              password: hashed
            })

            //SAVE DATABASE
            const user = await newUser.save();
            res.status(200).json(user);
          }catch(err){
            res.status(500).json(err);
        }
    },
    //LOGIN
    loginUser: async(req, res)=>{
      try{
        const data = req.body
        const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30s'})
        res.json({ accessToken})
      } catch(err){
        res.status(500).json(err);
      }
    }
}

module.exports = authController;