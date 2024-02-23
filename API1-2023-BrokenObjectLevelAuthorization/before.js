const express = require('express');
const app = express();
app.use(express.json());


const users = [
    { id: 1, email: 'cagatay@mail.com', name:"Çağatay Yıldız" },
    { id: 2, email: 'aykut@mail.com', name:"Aykut Arslan" },

]

//Kullanıcı detay bilgilerini getirir
app.get('/users/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('The user with the given ID was not found.');
    res.send(user);
});


app.listen(3000, () => console.log('Listening on port 3000...'));