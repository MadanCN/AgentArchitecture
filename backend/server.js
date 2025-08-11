const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static('../frontend'));

app.get('/api/hello', (req, res) =>{
    res.json({
        message: "Hello from your AI Agent builder API!",
        status:"Server is Running!"
    });
});

app.listen(PORT, () => {
    console.log('Server running at http://localhost:${PORT}');
    console.log('Open your browser and go to : http://localhost:${PORT}');
});