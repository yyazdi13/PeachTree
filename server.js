const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const db = require("./models");
const route = require('./routes/routes');
const cors = require('cors');

//Setup express instance and port config
const app = express();
const PORT = process.env.PORT || 3001;

//Connect to mongoose database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/peachTreeDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});

//Middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//Routes
app.use('/api', route);

//Heroku setup
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

//Connect to port
app.listen(PORT, (res) =>{
    console.log("app is listening at port " + PORT); 
});

