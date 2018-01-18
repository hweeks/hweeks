var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname +'./../build/')); 

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname +'./../build/index.html'));
});

app.listen(3000, () => {
	console.log('Silly site is up bois.')
}); 