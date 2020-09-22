const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HR8gECjeLxfuoNQ0C6MOdIbVp0tvyEJx5J0H4eJ8o4NOsIMJgtoQcFwxF1LWh6NiphrtMXDt9WgIP2cfwArM3t500pLQ0KFF8"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen commands
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-180d0/us-central1/api
