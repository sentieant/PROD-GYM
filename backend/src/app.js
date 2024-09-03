const express = require('express');
const app = express();

// middleware to parse json
app.use(express.json())

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
})