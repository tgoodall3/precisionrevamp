const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'precicion_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to Database');
});

app.listen(5000, () => console.log('Server Started'));

app.post('/testimonials', (req, res) => {
    const testimonial = { 
        id: req.body.id, 
        name: req.body.name, 
        testimonial: req.body.testimonial, 
        date: req.body.date, 
        rating: req.body.rating 
    };
    const sql = 'INSERT INTO testimonials SET ?';
    db.query(sql, testimonial, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.get('/testimonials', (req, res) => {
    const sql = 'SELECT * FROM testimonials';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});