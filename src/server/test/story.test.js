const { storyController } = require('../controllers/story-contoller');

describe('story tests', () => {
    it('can create story', async () => {
        const title = "foo";
        const postedOn = new Date();
        const newStory = await storyController.addStory(title, postedOn);
        expect(newStory.id).not.toBeNull();
    })
})