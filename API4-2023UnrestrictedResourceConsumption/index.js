const express = require('express');
const app = express();

app.use(express.json());

const rateLimit = require("express-rate-limit");
const slowDown = require("express-slow-down");

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 0.5 minutes
    max: 100 // IP başına 100 istek
});

//Request Throttling
const speedLimiter = slowDown({
    windowMs: 0.5 * 60 * 1000, // 15 minutes
    delayAfter: 10, // 100 istekten sonra
    delayMs: (hits) => hits * 500 // Her istekten sonra yavaşlatıyorum
});


//body size limit
app.use(express.json({ limit: '1kb' })); //body 10kb'dan büyükse requesti kabul etme


app.use(limiter);
app.use(speedLimiter);

app.get('/api/orders', (req, res) => {
    const orders = [
        { id: 1, name: 'Order 1' },
        { id: 2, name: 'Order 2' },
        { id: 3, name: 'Order 3' }
    ]
    res.json(orders);
})


app.post('/api/news', (req, res) => {
    var post = req.body.content;
    res.json(post);
})


app.listen(3000, () => console.log('Server is running...'));


// Rate Limiting
// speedLimiter
// body size limit