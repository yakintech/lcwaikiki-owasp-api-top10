const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');


app.use(cors());
app.use(express.json());

let privateKey = "batman"


const orders = [
    { id: 1, name: 'Order 1' },
    { id: 2, name: 'Order 2' },
    { id: 3, name: 'Order 3' }
]

app.use((req, res, next) => {

    if(req.url === '/api/login') {
        return next();
    }

    //Bearer Token
    const authHeader = req.headers.authorization;
   try {
    if(authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, privateKey, (err, user) => {
            if(err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
   } catch (error) {
         res.sendStatus(401);
   }
})




//parolaları tek taraflı hashlemem gerekiyor
app.post('/api/login', (req, res) => {

    if(!req.body.email || !req.body.password) {
        return res.status(400).send('Username and Password are required.');
    }
    if(req.body.email !== 'cagatay@mail.com' || req.body.password !== '123') {
        return res.status(400).send('Invalid Username or Password.');
    }

    // Authenticate User
    const token = jwt.sign({ email: req.body.email}, privateKey);
    console.log(token);
    res.json(token);

});



app.get('/api/orders', (req, res) => {
    res.json(orders);
})




app.listen(3000, () => console.log('Listening on port 3000...'));