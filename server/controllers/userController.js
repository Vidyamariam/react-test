import UserModel from "../model/UserModel.js";

export const createUserController = async (req, res)=> {

    try{
         const {name, email, password, experience} = req.body;

          const newUser = new UserModel({

            name: name,
            email: email,
            password: password,
            experience: experience
          })
            
          newUser.save();


    }
    catch(err){
        console.log(err);
        
    }

     
}