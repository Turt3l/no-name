const express = require("express");
const axios = require("axios").default;
const app = express();
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");
const PostgresClient = require("pg").Client;

const client = new PostgresClient({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "mikelis123",
  database: "postgres",
});

client.connect();

const stripe = require("stripe")(
  "sk_test_51O1PxaJIFOQgEMQOXxysXoRRpJAvOGII3zZJsuORhnXCc6IOAVOVX1KHkFmX7CLwm0rAWmgcuxI6xpMqflbSidHN00qdXVCkFS"
);

let price;
let itemId;
let userEmail;

app.use(express.static("public"));
app.use(express.json({ extended: false }));

app.post("/data/userInfo", async (req, res) => {
  try {
    const { userEmail } = req.body;
    const userItems = req.body;

    const insertQuery =
      "INSERT INTO transactions (_id, price, itemid, email) values ($1, $2, $3, $4)";

    // Data to be inserted
    const values = [
      crypto.randomUUID({ disableEntropyCache: true }),
      price,
      itemId,
      userEmail,
    ];

    // Execute the INSERT query
    client.query(insertQuery, values, (err, dbResult) => {
      if (!err) {
        console.log("Data inserted successfully");
        res.status(200).send("Data inserted successfully");
      } else {
        console.error(err.message);
        res.status(500).send("Internal Server Error");
      }
    });
  } catch (error) {
    console.error("Error in /data/userInfo route:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/data/items", async (req, res) => {
  const Itemitems = req.body;
  price = Itemitems.price;
  itemId = Itemitems.itemId;
});

app.post("/create-payment-intent", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: price * 100,
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(3001, () => console.log("Node server listening on port 3001!"));
