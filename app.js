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

app.get('/writings/monkey-king', (req, res) => {
    res.render('writings/monkey_king', { title: 'The Monkey King' });
})

app.get('/writings/after-life', (req, res) => {
    res.render('writings/after_life', { title: 'After Life' });
})

app.get('/animations/birthday', (req, res) => {
    res.render('animations/birthday', { title: 'Birthday' });
})

app.get('/animations/divine', (req, res) => {
    res.render('animations/divine', { title: 'Divine' });
})

app.get('/animations/chess', (req, res) => {
    res.render('animations/chess', { title: 'Chess' });
})

app.get('/animations/gems', (req, res) => {
    res.render('animations/gems', { title: 'Gems' });
})

app.get('/animations/pendulum', (req, res) => {
    res.render('animations/pendulum', { title: 'Pendulum' });
})

app.get('/illustrations/posters-2023-2024', (req, res) => {
    res.render('animations/pendulum', { title: 'Posters 2023-2024' });
})

app.listen(3000, () => console.log('Server running on port 3000'));
