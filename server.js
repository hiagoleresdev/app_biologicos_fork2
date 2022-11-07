const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname = './dist/app-biologicos'))

app.get('/*', (req,res) =>{
    res.sendFile(__dirname + './dist/app-biologicos/index.html');
});

app.listen(PORT, () => {
    console.log("Servidor na: "+PORT);
})

//correção