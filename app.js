const express = require('express');
const app = express();

// Serve static CSS files from the public folder
app.use(express.static('public'));

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Define application routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

app.get('/animations/birthday', (req, res) => {
    res.render('animations/birthday', { title: 'Birthday' });
})
app.listen(3000, () => console.log('Server running on port 3000'));
