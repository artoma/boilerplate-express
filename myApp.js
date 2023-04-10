let express = require('express');
require('dotenv').config();
let bodyParser = require('body-parser');


let app = express();
app.use('/public', express.static(__dirname + '/public'));
app.use((req,res, next) => {
 console.log(req.method +' '+ req.path +' - '+ req.ip);
 next();
});
app.use( bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


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
app.route('/name')
    .get((req, res) => res.send({name: req.query.first +' '+ req.query.last}) )
    .post((req, res) => res.send({name: req.body.first +' '+ req.body.last}))

































 module.exports = app;
