const express=require('express');
const router=express.Router();
const db=require('../../../firebasedatabase')
router.get('/problemlist',(req,res)=>{

    const databaseRef = db.ref('/problems');
    databaseRef.once('value')
    .then(snapshot => {
      const data = snapshot.val();
      res.status(200).send({status:'Success',data:data})
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
})
module.exports=router;