// PATH: 'Profit-Pilot/express-react/express-server/Profit-Pilot-be/routes/trades.jsx'

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

///////////////////////////////
// ROUTES
////////////////////////////////

// TRADES INDEX ROUTE
router.get("/", async (req, res) => {
	res.status(200).json({message: "trades index route"})
});

// TRADES CREATE ROUTE
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "trades create route"})
});

module.exports = router
