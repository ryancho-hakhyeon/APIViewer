var express = require('express');
var app     = express();
var port    = 3000;

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// This is the application root.
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// This is the default. 
// This should be placed last in the series of request handlers.
app.get('*', function (req, res) {
    res.send('Error: This page does not exist.');
});

app.listen(port, function () {
    console.info(`Example app listening on port ${port}!`);
});