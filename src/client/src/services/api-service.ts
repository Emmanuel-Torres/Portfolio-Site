import Story from "../models/story";
import axios from "axios";

const storyUrl = '/api/stories';
const tagUrl = '/api/tags';

const getStories = async (): Promise<Story[]> => {
    const res = await axios.get<Story[]>(storyUrl);
    return res.data.map(p => {
        return { ...p, story_posted_on: (new Date(p.PostedOn!)).toLocaleDateString() };
    });
};

const getStoryById = async (storyId: number): Promise<Story> => {
    const res = await axios.get<Story>(storyUrl + '/' + storyId);
    return { ...res.data, PostedOn: (new Date(res.data.PostedOn!)).toLocaleDateString() };
};

const addStory = async (story: Story): Promise<Story> => {
    const res = await axios.post<Story>(storyUrl, { story });
    return res.data;
}

const apiService = {
    getStories,
    getStoryById,
    addStory
};

export default apiService;