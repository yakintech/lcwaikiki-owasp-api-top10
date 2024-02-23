const express = require('express');
const app = express();

app.use(express.json());


//file upload sample
//express file upload
const fileUpload = require('express-fileupload');

app.use(fileUpload());

app.post('/api/upload', (req, res) => {
    if (!req.files) {
        return res.status(400).send('No files were uploaded.');
    }

    let sampleFile = req.files.sampleFile;

    //extension validation. jpeg, jpg, png
    let fileExtension = sampleFile.name.split('.').pop();

    //size validation
    if (sampleFile.size > 1024 * 1024) {
        return res.status(400).send('File size should not exceed 1MB.');
    }

    if (fileExtension !== 'jpeg' && fileExtension !== 'jpg' && fileExtension !== 'png') {
        return res.status(400).send('Invalid file extension.');
    }

    

    sampleFile.mv(__dirname + '/uploads/' + sampleFile.name, function (err) {
        if (err) {
            return res.status(500).send(err);
        }

        res.send('File uploaded!');
    } );
});


app.listen(3000, () => console.log('Server is running...'));