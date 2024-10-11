import UserModel from "../models/userModel.js"
import bcrypt from 'bcrypt'

export const handleRegistration = (req,res)=>{
  //  res.send({message:"success"})
  
  const {username,email,password} =req.body;

  UserModel.findOne({email})
    .then((existingUser)=>{
        if(existingUser){
          return res.status(403).json({error: "Email already exists"})
        }

        bcrypt.hash(password,10)
              .then((hashPassword)=>{
                  UserModel.create({username,email,password: hashPassword})
                    .then((newUser)=>{
                        res.status(200).json({message: "User registrationsuccess"})
                        req.session.userId =newUser._id;
                        console.log(req.session.userId)
                       
                    })
                    .catch((error)=>{
                      res.status(500).json({error:"1Error handling in server"})
                        
                    })
                  })
              .catch((error)=>{
                res.status(500).json({error:"2Error handling in servers"})
              })
              })
        .catch(()=>{
                res.status(500).json({error:"3Error handling in servers"})
        })
}


export const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "No user found with this email" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    req.session.userId = user.id;
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    return res.status(500).json({ error: "Error connecting server" });
  }
};

export const authChecking = (req, res) => {
  if (req.session.userId) {
    return res.status(200).json({ authenticated: true });
  } else {
    return res.status(200).json({ authenticated: false });
  }
};

export const getDashboard = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    const user = await UserModel.findById(req.session.userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ email: user.email });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};



export const handleLogout = (req,res) =>{
  req.session.destroy((err)=>{
    if(err){
      return res.status(500).json({error:"internal error"})
      }
      else{
        res.status(200).json({message:"logout success"})
      }
  
})
}
