//server.js

const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + 'frontend/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,'frontend', 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname,'frontend', 'build', 'index.html'));
});

app.listen(port);

// <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
{/* <link rel="icon" href="/favicon.ico" type="image/x-icon"></link> */}