const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');

// Serving static files in a centralized place
app.use(express.static('public'));

app.get('/', (req, res) => {
    let title = 'Home';
    let message = 'Welcome to home';
    res.render('welcome', {title, message});
})

app.listen(port, () => {
    console.log(`Example app listening on ${port}`)
})



