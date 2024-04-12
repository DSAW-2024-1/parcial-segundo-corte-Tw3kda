const express = require('express');

const users = require('./router/users');
const coin = require('./router/coin')





const app = express()
app.use(express.json());


app.use('', users);
app.use('/coin', coin);

app.get('/',(req,res)=>{
    res.send("WELCOME TO MY API ------ SANTIAGO NAVARRO CUY 0000305992" )
    

}) 



// Start the server
const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});