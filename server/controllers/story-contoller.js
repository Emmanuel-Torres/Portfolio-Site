const { dbService } = require("../services/db-service");
const { validatorService } = require("../services/validator-service");

const getStories = async () => {
    return await dbService.getStories();
};

const getStoryById = async (storyId) => {
    const story = await dbService.getStoryById(storyId);
    if (story) {
        const story_steps = await dbService.getStepsByStoryId(storyId);

        for (let i = 0; i < story_steps.length; i++) {
            const step_images = await dbService.getImagesByStepId(story_steps[i].step_id);
            story_steps[i]["step_images"] = step_images;
        }

        console.log(story_steps);
        return { ...story, story_steps };
    }

    return undefined;
};

const addStory = async (story_title, story_posted_on, story_steps) => {
    if (!validatorService.isValidStory({ story_title, story_posted_on, story_steps })) {
        throw Exeption('Title or Posted On not found.')
    }

    const story = await dbService.addStory({ story_title, story_posted_on });
    const storyWithSteps = addStepsToStory(story, story_steps);
}

// const updateStory = async (storyId, story) => {
//     return await dbService.updateStory(storyId, story);
// }

const deleteStory = async (storyId) => {
    return await dbService.deleteStory(storyId);
};

const addStepsToStory = async (story, steps) => {
    const story_steps = [];
    for (let i = 0; i < steps.length; i++) {
        const step = dbService.addStep(story.story_id, steps[i]);
        const stepWithImages = addImagesToStep(step, steps[i].step_images);
    }
};

const addImagesToStep = async (step, images) => {
    const step_images = [];
    for (let i = 0; i < images.length; i++) {
        const image = dbService.addImage(images[i]);
        step_images.push(image);
    }
};

module.exports.storyController = {
    getStories,
    getStoryById,
    addStory,
    // updateStory,
    deleteStory
}