var express = require("express");
var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static( __dirname + '/pokemonapi/dist/pokemonapi' ));

app.listen(8000, function(){
    console.log("Listening on port: 8000");
})