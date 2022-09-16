const express = require("express");
// const path = require("path");
const Contenedor = require("./products");
const app = express();


const products = new Contenedor('./productos.txt')
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname + "/index.html"));
// });

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