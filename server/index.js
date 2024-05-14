const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

const { MONGO_URL, PORT } = process.env;


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
