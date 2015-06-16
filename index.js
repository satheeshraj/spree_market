var express     =    require("express");
var app         =    express();

app.use(express.static(__dirname + '/app'));

app.get('/',function(req,res){
    res.sendfile("index.html");
});



app.listen(3000,function(){
    console.log("Working on port 3000");
});