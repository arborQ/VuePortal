var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})


app.post('/api/authentication/login', function(req, res) {
  res.send({ user: 'arbor', email: 'arbor@o2.pl' });
});

app.listen(5881, function () {
  console.log('Example app listening on port 5881!')
})