const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HVrTQG3dQRAQjFlQyv2c4CVsUejcaowROV7mTFkuKRoj4HwACwoTn6RwWYG74fhbD2n0PrCe1qIAEeUrhJxCyGg005tXPR8rM');

// API

// -App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.get('/', (req, res) => {
  res.status(200).send('hello, world!')
});

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  console.log('payment request received', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'INR'
  })
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

// -Listen command
exports.api = functions.https.onRequest(app);