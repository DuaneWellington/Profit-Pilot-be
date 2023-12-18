// PATH: 'Profit-Pilot/express-react/express-server/Profit-Pilot-be/server.jsx'


///////////////////////////////
// DEPENDENCIES
////////////////////////////////

require("dotenv").config();

const { PORT } = process.env;
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

require('./config/db.connection.js');

///////////////////////////////
// MIDDLEWARE
////////////////////////////////

app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use(cors());
app.use(morgan("dev"));

// 
///////////////////////////////
// ROUTES
////////////////////////////////

// const tradesRouter = require('./routes.trades');

app.get("/", (req, res) => {
    res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
