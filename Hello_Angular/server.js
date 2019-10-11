const express = require('express');

const app = express();

app.use(express.static( __dirname + '/public/dist/public' ));


app.listen(8000, function() {
    console.log('Listening on port 8000');
});


