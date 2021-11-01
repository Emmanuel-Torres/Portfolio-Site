const { Pool } = require("pg")

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
})

// Retrieve data:
const getStories = async () => {

};

const getTags = async () => {

};

const getSteps = async () => {

};

const getImages = async () => {

};

const getStepsByStoryId = async () => {

};

const getImagesByStoryId = async () => {

};

const getImagesByStepId = async () => {

};

const getTagsByStoryId = async () => {

};

const getStoriesByTagId = async () => {

};

//Add data:
const addStory = async () => {

};

const addTag = async () => {

};

const addStoryTag = async () => {

};

const addStep = async () => {

};

const addImage = async () => {

};

const addStepImage = async () => {

};

//Upddate data:
const updateStory = async () => {

};

const updateTag = async () => {

};

const updateStoryTag = async () => {

};

const updateStep = async () => {

};

const updateImage = async () => {

};

const updateStepImage = async () => {

};

//Delete data:
const deleteStory = async () => {

};

const deleteTag = async () => {

};

const deleteStoryTag = async () => {

};

const deleteStep = async () => {

};

const deleteImage = async () => {

};

const deleteStepImage = async () => {

};