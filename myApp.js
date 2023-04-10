let express = require('express');
require('dotenv').config();
let app = express();
app.use('/public', express.static(__dirname + '/public'));
app.use((req,res, next) => {
 console.log(req.method +' '+ req.path +' - '+ req.ip);
 next();
})
absolutePath = __dirname + '/views/index.html'
app.get('/', (req, res) => {
 res.sendFile(absolutePath);
})
app.get('/json', (req,res) => {
 let response = {message: "Hello json"}
 if(process.env.MESSAGE_STYLE  == 'uppercase'){
   response.message = response.message.toUpperCase();
 }
 res.json(response);
})



































 module.exports = app;
