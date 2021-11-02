const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//get endpoints
app.get('/api', (req, res) => {
    res.send('Hello')
});

app.get('/api/stories', (req, res) => {

});

app.get('/api/stories/:storyid', (req, res) => {

});

app.get('/api/stories/:storyid/steps', (req, res) => {

});

app.get('/api/stories/:storyid/tags', (req, res) => {
    
});

app.get('/api/steps/:stepid/images', (req, res) => {

});

app.get('/api/tags', (req, res) => {

});

app.get('/api/tags/:tagid/stories', (req, res) => {

});

//post endpoints
app.post('/api/stories', (req, res) => {

});

app.post('/api/stories/:storyid/tags', (req, res) => {

});

app.post('/api/stories/:storyid/steps', (req, res) => {

});

app.post('/api/steps/:stepid/images', (req, res) => {

});

app.post('/api/tags/:tagid/stories', (req, res) => {

});

//put endpoints
app.put('/api/stories/:storyid', (req, res) => {

});

app.put('/api/steps/:stepid', (req, res) => {

});

app.put('/api/images/:imageid', (req, res) => {

});

app.put('/api/tags/:tagid', (req, res) => {

});

//delete endpoints
app.delete('/api/stories/:storyid', (req, res) => {

});

app.delete('/api/steps/:stepid', (req, res) => {

});

app.delete('/api/images/:imageid', (req, res) => {

});

app.delete('/api/tags/:tagid', (req, res) => {

});


app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    console.log(`Running at ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
})