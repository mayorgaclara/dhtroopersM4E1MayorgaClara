const express = require('express')
const app = express()
const puerto = process.env.PORT;
const path = require('path');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto");
});
