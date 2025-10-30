const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/message', (req, res) => {
    res.json({
        message: 'Hello from Express Backend!',
        timestamp: new Date().toISOString(),
        status: 'success',
        kubernetes: true
    });
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

app.listen(PORT, () => {
    console.log(`Express backend running on port ${PORT}`);
});