const express = require('express');
const app = express();
const PORT = 3000;

// const home = (req, res) => {res.send('Hello World!')}
// const demo = (req, res) => {res.send('Info here!!!')}

function home(req, res){
    res.send('Hello World!')
}

function demo(req, res){
    const a = 123;
    const b = Math.random();
    const c = a + b;
    res.send('Info HeRe!' + c);
}




app.get('/',home)
app.post('/info',demo)

app.listen(PORT, () => {
    console.log(`Example app listening ar port http://localhost:3000 ${PORT}`)
})