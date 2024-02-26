const sql=require('mysql')
const connection=sql.createConnection({
    user:'root',
    password:'',
    host:"localhost",
    database:"quiz"
})
connection.connect((err)=>{
    if(err) throw err;
    console.log('connected')
})
module.exports=connection;