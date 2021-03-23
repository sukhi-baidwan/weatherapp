const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = 3000;

//Partials
const partialsPath= path.join(__dirname, "/partials")
hbs.registerPartials(partialsPath);
console.log(partialsPath);

//Serving Static Files
const staticpath = path.join(__dirname, "../public")

app.set('view engine', 'hbs');
app.use(express.static(staticpath));

//Routing
app.get("/", (req, res)=>{
    res.render("index")
})
app.get("/about", (req, res)=>{
    res.render('about')
})
app.get("/weather", (req, res)=>{
    res.render("weather")
})
app.get("*", (req, res)=>{
    res.render("404error")
})

app.listen(port , ()=>{
    console.log(`Listening to the port ${port}`)
})