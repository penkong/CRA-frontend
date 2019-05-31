const express = require('express');
const path = require('path');
const app = express();

app.get('/', function (req,res) {
  res.sendFile(path.resolve(__dirname,'frontend/build/index.html'));
})








const PORT = process.env.PORT || 5001;
app.listen(PORT);