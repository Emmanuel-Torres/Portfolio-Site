import Story from "../models/story";
import axios from "axios";

const storyUrl = '/api/stories';

const getStories = async (): Promise<Story[]> => {
    const res = await axios.get<Story[]>(storyUrl);
    return res.data.map(p => {
        return { ...p, postedOn: (new Date(p.postedOn!)).toLocaleDateString() };
    });
};

const getStoryById = async (storyId: number): Promise<Story> => {
    const res = await axios.get<Story>(storyUrl + '/' + storyId);
    return { ...res.data, postedOn: (new Date(res.data.postedOn!)).toLocaleDateString() };
};

const addStory = async (story: Story): Promise<Story> => {
    const res = await axios.post<Story>(storyUrl, story);
    return res.data;
}

const apiService = {
    getStories,
    getStoryById,
    addStory
};

export default apiService;