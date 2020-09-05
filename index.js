const path = require('path');
const express = require('express');
const fs = require('fs');
const app = express();


const data = fs.readFileSync('data.json', 'utf-8');
const dataObj = JSON.parse(data);

const PORT = process.env.PORT || 3000;



app.use("/public", express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.get('/', (req, res) => {
    res.render('product-overview', {
        'product': dataObj
    });
})

app.get('/product/:id', (req, res) => {
    res.render('product-detail', {
        'data': dataObj[req.params.id]
    });
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})