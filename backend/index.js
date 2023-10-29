const express = require('express');
const connectToMongo = require('./db');
const path = require('path')
connectToMongo();
const app = express();
const port = 5000;
app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')));
app.use('/send',require('./routes/message'))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})