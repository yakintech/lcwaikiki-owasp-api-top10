const express = require('express');
const app = express();
app.use(express.json());


const allowedUrls = [
    "https://www.google.com",
    "https://www.facebook.com",
    "https://www.twitter.com"
]

app.post("/api/fetch", (req, res) => {
    const url = req.body.url;

    if(allowedUrls.includes(url)) {

        
        res.json("URL is allowed");
    } else {
        res.status(500).send("Error");
    }
})

//Bu güncellemeyle sunucu yalnızda white liste eklenmiş domainlereden veri çekebilir. SSFR açığı azaltır.
