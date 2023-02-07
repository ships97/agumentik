const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/db');
const {ContentRouter,UserRouter} = require('./routes/index.js');
require('dotenv').config();
const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use('/content',ContentRouter);
app.use('/user',UserRouter);

app.get('/', (req, res) => {
    res.send('Hello from NFT Backend');
});

dbConnect().then(()=>{  
    app.listen(port, () => {
        try{
            dbConnect();
            console.log('connected to db successfully');
        }
        catch(err){
            console.log("Error connecting to db");
            console.log(err);
        }
        console.log('Listening at port 8080');
    })
})