const express = require('express');
const userRoute = require('./routes/user');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const expressLayouts = require('express-ejs-layouts');
require('dotenv/config');


const app = express();

const PORT = process.env.PORT || 5000;

//Index page Rendert
app.get('/', (req,res)=>{
    res.render('index');
});



//Bodyparser Middleware
app.use(bodyParser.json());


//View engine middleware
app.use(expressLayouts);
app.set('view engine','ejs');


app.use('/users', userRoute);

//Database Connection
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(()=>console.log('Connected to Database'))
    .catch(err => console.log(err));

app.listen(PORT,console.log(`Server Started at Port ${PORT}`));