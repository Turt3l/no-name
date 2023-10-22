const express = require("express");
const app = express();
// This is your test secret API key.
const stripe = require("stripe")('sk_test_51O1PxaJIFOQgEMQOXxysXoRRpJAvOGII3zZJsuORhnXCc6IOAVOVX1KHkFmX7CLwm0rAWmgcuxI6xpMqflbSidHN00qdXVCkFS');

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "eur",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});


app.listen(3001, () => console.log("Node server listening on port 3001!"));