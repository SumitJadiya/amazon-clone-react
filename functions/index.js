const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const stripe = require('stripe');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


// secret key from firebase



// API

// - App Config
const app = express()

// - Middleware
app.use(cors({ origin: true }))
app.use(express.json())

// - API Routes
app.get('/', (request, response) => response.status(200).send('hello world'))
app.post('/payments/create', (request, response) => response.status(200).send('hello sumit'))

// - Listen
exports.api = functions.https.onRequest(app)