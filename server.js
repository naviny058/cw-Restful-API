const express = require("express");

const app = express();

app.use(express.json());

//stich the routes to server
require("./routes/idea.routes")(app);

//starting server
app.listen(8080, ()=>{
    console.log("Server Started");
})