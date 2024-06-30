const express = require('express');
const os = require('os');
const app = express();

app.get('/', (req, res) => {
    res.send(`Hello from Node.js App! ${os.hostname()}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});