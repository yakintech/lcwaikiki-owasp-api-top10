const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());

var corsOptions = {
    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    methods: "GET",
}

app.use(cors());


app.post("/api/categories", cors(corsOptions), (req, res) => {
    //add category operation
    const category = req.body;
    return res.json(category);

})

app.post("/api/categories2", (req, res) => {
    //add category operation
    const category = req.body;
    console.log(category);
    res.json(category);
})




app.listen(3000, () => console.log('Server is running...'));
