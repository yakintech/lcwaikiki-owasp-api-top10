const express = require('express');
const app = express();
app.use(express.json());


const users = [
    { id: 1, email: 'cagatay@mail.com', name: "Çağatay Yıldız" },
    { id: 2, email: 'aykut@mail.com', name: "Aykut Arslan" },

]


//Basit bir kimlik doğrulama middleware'i yazalım
function auhenticate(req, res, next) {

    const userId = parseInt(req.header('userId'));

    const user = users.find(c => c.id === userId);
    if (!user)
        return res.status(401).send('Access Denied');

    return next();
}

//Kullanıcı detay bilgilerini getirir
app.get('/users/:id', auhenticate, (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('The user with the given ID was not found.');
    res.send(user);
});


app.get('/orders/:id', auhenticate, (req, res) => {
    return res.send('Order details');
});

app.listen(3000, () => console.log('Listening on port 3000...'));

//Yukarıda kullandığım authanticate middleware'i ile kullanıcı kimlik doğrulaması yapmaktayım. ve böylece her kullanıcı kendi bilgilerini görebilmektedir.


//Sipariş ekleme
//adres ekleme
//adres güncelleme