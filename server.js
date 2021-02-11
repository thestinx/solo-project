const path = require("path");
const express = require("express");
const mongoose = require ('mongoose')
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')

const User = require('./database/userModel.js')
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/my-first-project', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, ()=>{console.log(`listening on ${PORT}`)})

//old way:
app.get('/users/:email', async (req,res)=>{
    const user = await User.findOne({email:req.params.email});
    // console.log(req.params)
    console.log(user)
    // console.log(user.images)
    res.json(user)
   
})



//make http req to local host to get users