const express = require('express');
const app = express();
const PORT = 3000;

const home = (req, res) => {res.send('Hello World!')}




app.get('/',home)

app.listen(PORT, () => {
    console.log(`Example app listening ar port http://localhost:3000 ${PORT}`)
})