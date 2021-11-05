const { dbService } = require('../services/db-service');

const getTags = async () => {
    return await dbService.getTags();
};

const getTagsByStoryId = async (storyId) => {
    return await dbService.getTagsByStoryId(storyId);
};

const addTag = async (title) => {
    return await dbService.addTag({ title });
};

const updateTag = async (tagId, tag) => {
    return await dbService.updateTag(tagId, tag);
};

const deleteTag = async (tagId) => {
    return await dbService.deleteTag(tagId);
};

module.exports.tagController = {
    getTags,
    getTagsByStoryId,
    addTag,
    updateTag,
    deleteTag
};