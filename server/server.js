var express = require('express');
var app = express();
var path = require('path');
var port = 5005;
var bodyParser = require('body-parser');

//Happens before post
app.use(bodyParser.urlencoded({extended: true}));


app.post("/calculator", function(req, res){
  var calc = req.body;  //This is data attribute sent
 //package recieved
  res.send({message: "Successfully performed an operation!"});
  //Run on server and see what happens
});

//If code is in wrong order it won't work
app.get("/calculator", function(req, res){
res.send(products);
});

app.get('/*', function(req, res){
  var file = req.params[0]  || 'views/index.html';
    res.sendFile(path.join(__dirname, '/public/', file));
});

//Copy to new project
app.listen(port, function(){
   console.log('Server running on port', 5005);
});
