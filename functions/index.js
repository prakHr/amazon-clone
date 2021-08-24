const functions = require("firebase-functions");
const express =require("express");
const cors=require("cors");
const stripe=require("stripe")("sk_test_51JS0ZwSGBmadKcFhQkT788LesKdhyQh1fAHWGtFXQfDZFvmGBWGlDS6L70t20V3SY87w9VOBpiMf5jbeQLCqc40500joZblaa7");
// API
// App config
const app=express();
// Middlewares
app.use(cors({ origin:true }));
app.use(express.json());
// API routes
app.get("/",(request,response) => response.status(200).send('hello world'))
// Listen command
//app.get('/qazi',(request,response)=>response.status(200).send('Whats up world'))
app.post("/payments/create",async (request,response)=>{
    //console.log("REACHED HERE");
    const total=request.query.total;

    console.log("Payment Request Received Boom for this amount >>>",total);
    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,//subunits of the currency
        currency:"inr",
         // Verify your integration in this guide by including this parameter
        //metadata: { integration_check: "accept_a_payment" },
    });
    console.log("paymentIntent.client_secret Secret >>>",paymentIntent.client_secret);
    
    response.status(201).send({
        
        clientSecret:paymentIntent.client_secret,
    });
});

exports.api=functions.https.onRequest(app);
// Example endpoint
// http://localhost:5001/challenge-2abc3/us-central1/api

// const stripe=require('stripe');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
