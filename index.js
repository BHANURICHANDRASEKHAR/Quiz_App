const express=require('express')
const cors=require('cors')
const signup=require('./signup/signup')
const login=require('./signup/login')
// const addtodatabase=require('./posttodatabase');
const getproblembyid=require('./signup/questions/cardsdata/getalgorithm')
const bodyParser=require('body-parser');
const getcode=require('./signup/questions/googleapi')
const top=require('./signup/questions/cardsdata/top')
const cardsdata=require('./signup/questions/cardsdata/cardsdata')
const mostasked=require('./signup/questions/cardsdata/mostaskedquestions');
const problemlist=require('./signup/questions/cardsdata/problemslist')
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
const corsOptions = {
  origin: 'https://tiny-alfajores-ef0da1.netlify.app', // Replace with your frontend's origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable cookies and other credentials to be included in the CORS request
  optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.get('/',(req,res)=>{
  res.send('hello world')
})
app.use(cors(corsOptions));
app.use(signup);
app.use(login)
app.use(cardsdata)
app.use(mostasked)
app.use(top)
app.use(problemlist)
app.use(getcode)
app.use(getproblembyid);
// app.use(addtodatabase)
const port=process.env.PORT||3000;
app.listen(port,()=>{
  console.log(`Server is running on port ${port}`)
})