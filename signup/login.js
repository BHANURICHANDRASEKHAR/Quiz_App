const express = require('express');
const router = express.Router();
const databaseRef = require('../firebasedatabase');
const jwt=require('jsonwebtoken')
require('dotenv').config();
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if the user already exists
    databaseRef.ref('/user').orderByChild('email').equalTo(email).once('value', (snapshot) => {
        const user = snapshot.val();

        if (user) {
            // User found, you can now access user details
            const userId = Object.keys(user); // Assuming each user has a unique ID
            const userDetails = user[userId];
           const jwttoken=tokensign(userDetails)
           userDetails['jwttoken']=jwttoken;
            // Continue with your login logic here, e.g., compare passwords
            password==userDetails.password?res.status(200).json({ status:'Success', user: userDetails }):res.status(200).json({ staus:'UnSuccess', msg: 'Invalid password' })
           
            // Respond with user details or any other relevant response
        } else {
            // User not found
            res.status(200).json({ success: false, msg: 'User not found' });
        }
    });
});

module.exports = router;
function tokensign(userdata)
{
    const email={
        email:userdata.email
    }
    const token=jwt.sign(email,process.env.jwt_secret_key,{expiresIn:'1Y'})
    return token;
}