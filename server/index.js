const express = require('express');
const { dbService } = require('./services/db-service');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//get endpoints
app.get('/api', (req, res) => {
    res.send('Hello')
});

app.get('/api/stories', (req, res) => {
    dbService.getStories().then(r => res.send(r)).catch(err => res.send(500));
});

app.get('/api/stories/:storyid', (req, res) => {
    const storyId = req.params.storyid;
    dbService.getStoryById(storyId).then(r => res.send(r)).catch(err => res.send(500));
});

app.get('/api/stories/:storyid/steps', (req, res) => {
    const storyId = req.params.storyid;
    dbService.getStepsByStoryId(storyId).then(r => res.send(r)).catch(err => res.send(500));
});

app.get('/api/stories/:storyid/tags', (req, res) => {
    const storyId = req.params.storyid;
    dbService.getTagsByStoryId(storyId).then(r => res.send(r)).catch(err => res.send(500));
});

app.get('/api/steps/:stepid/images', (req, res) => {
    const stepId = req.params.stepid;
    dbService.getImagesByStepId(stepId).then(r => res.send(r)).catch(err => res.send(500));
});

app.get('/api/tags', (req, res) => {
    dbService.getTags().then(r => res.send(r)).catch(err => res.send(500));
});

app.get('/api/tags/:tagid/stories', (req, res) => {
    const tagId = req.params.tagid;
    dbService.getTagsByStoryId(tagId).then(r => res.send(r)).catch(err => res.send(500));
});

//post endpoints
app.post('/api/stories', async (req, res) => {
    const story = req.body.story;
    try {
        
    }
    catch {

    }
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
    const storyId = req.params.storyid;
    const story = req.body.story;
    dbService.updateStory(storyId, story).then(() => res.send(200)).catch(err => res.send(500));
});

app.put('/api/steps/:stepid', (req, res) => {
    const stepId = req.params.stepid;
    const step = req.body.step;
    dbService.updateStep(stepId, step).then(() => res.send(200)).catch(err => res.send(500));
});

app.put('/api/images/:imageid', (req, res) => {
    const imageId = req.params.imageid;
    const image = req.body.image;
    dbService.updateImage(imageId, image).then(() => res.send(200)).catch(err => res.send(500));
});

app.put('/api/tags/:tagid', (req, res) => {
    const tagId = req.params.tagid;
    const tag = req.body.tag;
    dbService.updateTag(tagId, tag).then(() => res.send(200)).catch(err => res.send(500));
});

//delete endpoints
app.delete('/api/stories/:storyid', (req, res) => {
    const storyId = req.params.storyid;
    dbService.deleteStory(storyId).then(() => res.send(200)).catch(err => res.send(500));
});

app.delete('/api/steps/:stepid', (req, res) => {
    const stepId = req.params.stepid;
    dbService.deleteStep(stepId).then(() => res.send(200)).catch(err => res.send(500));
});

app.delete('/api/images/:imageid', (req, res) => {
    const imageId = req.params.imageid;
    dbService.deleteImage(imageId).then(() => res.send(200)).catch(err => res.send(500));
});

app.delete('/api/tags/:tagid', (req, res) => {
    const tagId = req.params.tagid;
    dbService.deleteTag(tagId).then(() => res.send(200)).catch(err => res.send(500));
});


app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    console.log(`Running at ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
})