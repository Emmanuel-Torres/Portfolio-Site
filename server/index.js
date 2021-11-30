const express = require('express');
const app = express();

const { storyController } = require('./controllers/story-contoller');
const { stepController } = require('./controllers/step-controller');
const { tagController } = require('./controllers/tag-controller');
const { imageController } = require('./controllers/image-controller');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/stories', async (req, res) => {
    res.json(await storyController.getStories());
});

app.get('/api/tags', async (req, res) => {
    res.json(await tagController.getTags());
});

app.get('/api/stories/:storyid', async (req, res) => {
    try {
        res.json(await storyController.getStoryById(req.params.storyid));
    }
    catch (ex) {
        console.error(ex);
        res.send(500);
    }
});

app.post('/api/stories', async (req, res) => {
    const story_title = req.body.story.story_title;
    const story_steps = req.body.story.story_steps;
    res.json(await storyController.addStory(story_title, story_steps));
});

app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    console.log(`Running at ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
})