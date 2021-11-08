const { dbService } = require("../services/db-service");

const getStories = async () => {
    return await dbService.getStories();
};

const getStoryById = async (storyId) => {
    const story = await dbService.getStoryById(storyId);
    const story_steps = await dbService.getStepsByStoryId(storyId);
    return { ...story, story_steps };
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