const express = require("express");
// const path = require("path");
const Contenedor = require("./products");
const app = express();
const path = require('path')
const engine = require('ejs-mate')

const products = new Contenedor('./productos.txt')

app.set('views', path.join(__dirname, 'views') )
app.engine('ejs', engine);
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render('index');
});
app.get("/signup", (req, res) => {
    res.render('signup');
});

app.get("/productos", (req, res) =>{
    
    res.json(products.getAll())
    
});
app.get("/productoRandom", (req, res) =>{
    res.json(products.randomGet())
    // res.json(products.randonGet(), console.log(products.randonGet()))
    // res.send("hola")
    
});

app.listen(8080, ()=>{
    console.log("Servidor en puerto", 8080);
});