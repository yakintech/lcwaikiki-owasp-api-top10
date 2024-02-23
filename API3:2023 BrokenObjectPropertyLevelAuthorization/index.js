const express = require('express');
const app = express();
app.use(express.json());


let users = [
    {
        id:1,
        email:"cagatay@mail.com",
        role:"admin",
        address:"İstanbul",
        salary:10000
    },
    {
        id:2,
        email:"aykut@mail.com",
        address:"İzmir",
        role:"user",
        salary:5000
    }
]


app.put('/api/users/:id', (req, res) => {
    let user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) {
        return res.status(404).send('User not found');
    }
    user.address = req.body.address;
    user.email = req.body.email;
    user.salary = req.body.salary;
    res.json(user);
})


app.listen(3000, () => console.log('Server is running...'));