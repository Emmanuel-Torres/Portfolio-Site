const express = require('express');
const app = express();

const { storyController } = require('./controllers/story-contoller');
const { stepController } = require('./controllers/step-controller');
const { tagController } = require('./controllers/tag-controller');
const { imageController } = require('./controllers/image-controller');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// get endpoints
app.get('/api', (req, res) => res.send('welcome'));

app.get('/api/stories', async (req, res) => {
    res.json(await storyController.getStories());
});

app.get('/api/stories/:storyid', async (req, res) => {
    res.json(await storyController.getStoryById(req.params.storyid))
});

// app.get('/api/stories/:storyid/steps', async (req, res) => { res.json(await stepController.getStepsByStoryId(req.params.storyid)) });

// app.get('/api/stories/:storyid/tags', async (req, res) => { res.json(await tagController.getTagsByStoryId(req.params.storyid)) });

// app.get('/api/steps/:stepid/images', async (req, res) => { res.json(await imageController.getImagesByStepId(req.params.stepid)) });

app.get('/api/tags', async (req, res) => {
    res.json(await tagController.getTags())
});

// app.get('/api/tags/:tagid/stories', async (req, res) => { res.json(await storyController.getStoriesByTagId(req.params.tagid)) });

// post endpoints
app.post('/api/stories', async (req, res) => {
    const title = req.body.story.title;
    const postedOn = req.body.story.postedOn;
    res.json(await storyController.addStory(title, postedOn));
});

app.post('/api/stories/:storyid/steps', async (req, res) => {
    const storyId = req.params.storyid;
    const title = req.body.step.title;
    const content = req.body.step.content;
    const position = req.body.step.position;
    res.json(await stepController.addStep(storyId, title, content, position));
});

app.post('/api/stories/:storyid/tags', async (req, res) => { });

app.post('/api/steps/:stepid/images', async (req, res) => {
    const stepId = req.params.stepid;
    const title = req.body.image.title;
    const img = req.body.image.img;
    const caption = req.body.image.caption;
    res.json(await imageController.addImage(stepId, title, img, caption));
});

app.post('/api/tags/:tagid/stories', async (req, res) => { });

// put endpoints
app.put('/api/stories/:storyid', async (req, res) => { res.json(await storyController.updateStory(req.params.storyid, req.body.story)) });

app.put('/api/steps/:stepid', async (req, res) => { res.json(await stepController.updateStep(req.params.stepid, req.body.step)) });

app.put('/api/images/:imageid', async (req, res) => { res.json(await imageController.updateImage(req.params.imageid, req.body.image)) });

app.put('/api/tags/:tagid', async (req, res) => { res.json(await tagController.updateTag(req.params.tagid, req.body.tag)) });

// delete endpoints
app.delete('/api/stories/:storyid', async (req, res) => { res.json(await storyController.deleteStory(req.params.storyid)) });

app.delete('/api/steps/:stepid', async (req, res) => { res.json(await stepController.deleteStep(req.params.stepid)) });

app.delete('/api/images/:imageid', async (req, res) => { res.json(await imageController.deleteImage(req.params.imageid)) });

app.delete('/api/tags/:tagid', async (req, res) => { res.json(await tagController.deleteTag(req.params.tagid)) });

// configure host
app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    console.log(`Running at ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
})