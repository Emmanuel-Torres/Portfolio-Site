const { default: axios } = require('axios')

const storyUrl = '/api/stories';
// const stepUrl = '/api/steps';
const tagUrl = '/api/tags';
// const imageUrl = '/api/image';

const getStories = async () => {
    const res = await axios.get(storyUrl);
    return res.data.map(p => {
        return { ...p, story_posted_on: (new Date(p.story_posted_on)).toLocaleDateString() };
    });
};

const getStoryById = async (storyId) => {
    const res = await axios.get(storyUrl + '/' + storyId);
    return { ...res.data, story_posted_on: (new Date(res.data.story_posted_on)).toLocaleDateString() };
};

const getTags = async () => {
    const res = await axios.get(tagUrl);
    return res.data;
};

const apiService = {
    getStories,
    getStoryById,
    getTags,
};

export default apiService;