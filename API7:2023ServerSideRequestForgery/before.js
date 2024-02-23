const { default: axios } = require('axios');
const express = require('express');
const app = express();

app.use(express.json());



app.post("/api/fetch", (req, res) => {
    const url = req.body.url;

    try {
        axios.get(url).then(response => {
            res.json(response.data);
        }).catch(error => {
            res.status(500).send("Error");
        });
    } catch (error) {
        res.status(500).send("Error");

    }
})


//Saldırganın sunucuyu iç ağdaki veya diğer hassas hedeflere istek yapmaya zorlamak için kullanılabilen bir SSFR açığına neden olur.
//Örneğin, saldırgan, sunucunun iç ağındaki bir veritabanına veya başka bir hizmete istek yapmasını sağlayabilir.






    app.listen(3000, () => console.log('Server is running...'));