const { dbService } = require("../services/db-service");

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

const getStoriesByTagId = async (tagId) => {
    return await dbService.getStoriesByTagId(tagId);
};

const addStory = async (title, postedOn) => {
    if (!title || !postedOn) {
        throw Exeption('Title or Posted On not found.')
    }

    return await dbService.addStory({ title, postedOn })
}

const updateStory = async (storyId, story) => {
    return await dbService.updateStory(storyId, story);
}

const deleteStory = async (storyId) => {
    return await dbService.deleteStory(storyId);
};

module.exports.storyController = {
    getStories,
    getStoryById,
    getStoriesByTagId,
    addStory,
    updateStory,
    deleteStory
}