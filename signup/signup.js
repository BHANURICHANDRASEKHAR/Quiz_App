const express=require('express')
const router=express.Router();
const databaseRef=require('../firebasedatabase')
router.post('/signup',(req,res)=>{
    const {name,email,password}=req.body;
    const userData = {
        name: name,
        email: email,
        password: password,
      };
      
      // Check if the user already exists
      databaseRef.ref('/user').orderByChild('email').equalTo(userData.email).once('value', (snapshot) => {
        if (snapshot.exists()) {
          // User already exists
          res.send({status:'UnSuccess:',msg:'User already exists'})

        } else {
          // User does not exist, add them to the database
          databaseRef.ref('/user').push(userData)
            .then(() => {
              res.send({status:'Success'})
            })
            .catch((error) => {
              console.error('Error adding user to the database:', error);
            });
        }
      }).catch((error) => {
        console.error('Error checking user existence:', error);
      });
})
module.exports=router;