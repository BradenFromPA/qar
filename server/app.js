const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();


var visits = 0;

app.get('/', (req, res) => {
    visits += 1;
    res.json({
        pageName: 'Home Page',
        visits: visits
    });
});

app.get('/api', (req, res) => {
    res.json({
        pageName: 'Api Page'
    });
});

app.get('/users', (req, res) => {
    res.json({
        pageName: 'Users Page'
    });
});
    


app.listen(PORT, () => {
    console.log(`Server started on localhost:${PORT}`);
});