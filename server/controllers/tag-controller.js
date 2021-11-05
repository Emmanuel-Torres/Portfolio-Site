const { dbService } = require('../services/db-service');

const getTags = async () => {
    return await dbService.getTags();
};

const getTagsByStoryId = async (storyId) => {
    return await dbService.getTagsByStoryId(storyId);
};

const addTagByStoryId = async (storyId, title) => {
    const res = await dbService.addTag({ title });
    await dbService.addStoryTag(storyId, res.tagId)
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
    addTagByStoryId,
    updateTag,
    deleteTag
};