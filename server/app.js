// IMPORTS
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// CONSTANTS
dotenv.config();
const app = express();
const APP_PORT= process.env.APP_PORT;
const MONGOOSE_USER = process.env.MONGOOSE_USER;
const MONGOOSE_PASS = process.env.MONGOOSE_PASS;
const MONGOOSE_HOST = process.env.MONGOOSE_HOST;

// LOGIC
mongoose.connect(`mongodb+srv://${MONGOOSE_USER}:${MONGOOSE_PASS}@${MONGOOSE_HOST}?retryWrites=true&w=majority`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
	console.log('connected to database');
});

app.use(cors());

app.use('/graphql', graphqlHTTP({
	schema	
}));

app.listen(APP_PORT, () => console.log(`Listening for requests on port ${APP_PORT}`));
