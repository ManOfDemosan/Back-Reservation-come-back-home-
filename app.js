const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Routes 설정
const reservationRoutes = require('./routes/reservations');
app.use('/api/reservations', reservationRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
