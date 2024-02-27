const express=require('express');
const router=express.Router();
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(
    process.env.open_ai_key, 
    );
router.post('/getcodes',async(req,res)=>{

    const data=req.body;
    try{
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    
       const prompt = `${data[0]} in ${data[1]} code you can give only code`
 
    
      const result = await model.generateContent(prompt);
      const response = await result.response;
     
       res.send({status:'Success',data:response.text()})
    
       }
       catch(e)
       {
        res.send({error: e.message});
       }
      
})
module.exports=router;