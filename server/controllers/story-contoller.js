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

const addStory = async (story_title, story_steps) => {
    if (!validatorService.isValidStory(story_title)) {
        throw Exeption('Title or Posted On not found');
    }
    const story = await dbService.addStory({ story_title, story_posted_on: new Date() });
    const storyWithSteps = await addStepsToStory(story, story_steps);
    return storyWithSteps;
}

const addStepsToStory = async (story, steps) => {
    const story_steps = [];
    for (let i = 0; i < steps.length; i++) {
        if (!validatorService.isValidStep(steps[i])) {
            throw Exeption('Step was not valid');
        }
        const step = await dbService.addStep(story.story_id, steps[i]);
        const stepWithImages = await addImagesToStep(step, steps[i].step_images);
        story_steps.push(stepWithImages);
    }
    return { ...story, story_steps };
};

const addImagesToStep = async (step, images) => {
    const step_images = [];
    for (let i = 0; i < images.length; i++) {
        if (!validatorService.isValidImage(images[i])) {
            throw Exeption('Image was not valid');
        }
        const image = await dbService.addImage(images[i]);
        const stepImage = await dbService.addStepImage(step.step_id, image.image_id)
        step_images.push({ ...image, step_image_id: stepImage.step_image_id });
    }
    return { ...step, step_images };
};

const deleteStory = async (storyId) => {
    return await dbService.deleteStory(storyId);
};

module.exports.storyController = {
    getStories,
    getStoryById,
    addStory,
    // updateStory,
    deleteStory
}