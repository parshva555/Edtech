const express = require('express');
const connectToMongo = require('./db');
connectToMongo();
const app = express();
const port = 5000;
app.use(express.json())
app.use('/send',require('./routes/message'))
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})