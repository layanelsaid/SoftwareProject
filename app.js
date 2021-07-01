const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');


app.use(cookieParser());
app.use(express.json());


mongoose.connect('mongodb+srv://layan:Layan_2002@cluster0.qmznn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
                 ,{useNewUrlParser : true,useUnifiedTopology: true},()=>{
    console.log('successfully connected to database');
});



const userRouter = require('./routes/User.js');
app.use('/user',userRouter);

app.listen(5000,()=>{
    console.log('express server started');
});

