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
app.get('/now', (req, res, next) => {
 req.time = new Date().toString();
 next();
}, (req, res) => {
 res.json({time: req.time});
})
app.get('/:word/echo', (req, res) => {
 res.json({echo: req.params.word} );
})

































 module.exports = app;
