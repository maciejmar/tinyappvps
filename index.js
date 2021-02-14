const express  = require('express');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
app.get('/', (req, res) => {
    res.send('Hello fallks! It is my app on vps! Good luck!');
});
app.get('/about', (req,res) => {
    res.send('This is about of tinyappvps')
});
app.listen(port);
console.log(`My app is on port ${ port} and is listening`);
