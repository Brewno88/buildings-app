const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Connect to DB
mongoose.connect(process.env.DB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('Connected to MongoDB');
});

// Routes
const buildingsRouter = require('./routes/buildings');
app.use('/api/buildings', buildingsRouter);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
app.get('/', (req, res) => {
	res.send('Homepage');
});
