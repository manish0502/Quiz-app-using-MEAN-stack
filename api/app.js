const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const connectDB = require('./config/db');


const userAuthRoutes = require('./routes/userAuth');
const questionRoute = require('./routes/questions');
const leaderRoute = require('./routes/leaderBoard');

// databse setup

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json({extended : false}));

app.get('/',(req , res)=>{
    res.send('API Running');
})


// User Authentication Route
app.use('/api/auth', userAuthRoutes);

// Questions Route
app.use('/api/question', questionRoute);

// Leaderboard Route
app.use('/api/leaderboard', leaderRoute);


//Defing Port 
const PORT = process.env.PORT || 5000;

app.listen(PORT ,()=>{
    console.log(`server started on port ${PORT}`)
});