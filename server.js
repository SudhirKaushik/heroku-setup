const express = require('express');
const app = express();
const path = require('path');
var port=process.env.PORT || 8080;
// Run the app by serving the static files
// in the dist directory
/*app.use(express.static(path.join(__dirname, "dist"));*/

var DIST_DIR = path.join(__dirname, "dist");

    app.use(express.static(DIST_DIR));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});
console.log("\n\npath is "+__dirname);
// Start the app by listening on the default
// Heroku port


app.listen(port);
console.log("\n\tListening on port "+port);