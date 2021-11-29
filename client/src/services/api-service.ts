import Story from "../models/story";
import axios from "axios";
import Tag from "../models/tag";

const storyUrl = '/api/stories';
const tagUrl = '/api/tags';

const getStories = async (): Promise<Story[]> => {
    const res = await axios.get<Story[]>(storyUrl);
    return res.data.map(p => {
        return { ...p, story_posted_on: (new Date(p.story_posted_on)).toLocaleDateString() };
    });
};

const getStoryById = async (storyId: number): Promise<Story> => {
    const res = await axios.get<Story>(storyUrl + '/' + storyId);
    return { ...res.data, story_posted_on: (new Date(res.data.story_posted_on)).toLocaleDateString() };
};

const getTags = async (): Promise<Tag[]> => {
    const res = await axios.get<Tag[]>(tagUrl);
    return res.data;
};

const addStory = async (story: Story): Promise<Story> => {
    console.log("here", story);
    const res = await axios.post<Story>(storyUrl, { story });
    return res.data;
}

const apiService = {
    getStories,
    getStoryById,
    getTags,
    addStory
};

export default apiService;