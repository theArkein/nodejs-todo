let express = require("express");
let routes = require("./src/routes/route.js");

let app = express();
const PORT = process.env.PORT || 5000

// App Variables
app.variables = {
    publicDirectoryPath : __dirname+"/public",
    title : "Todo App",
}

// Set HBS as View Engine
app.set("view engine","hbs");

// Set Path for Satic Files
app.use(express.static(app.variables.publicDirectoryPath));
app.use(express.json());

// Start Routing
routes(app)

// Listen on port 3000
app.listen( PORT, ()=>{
    console.log("Listening to port: ", PORT);
})