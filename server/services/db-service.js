const { Pool } = require("pg")
const dotenv = require("dotenv")
dotenv.config()

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
})

// Retrieve data:
const getStories = async () => {
    return (await pool.query(`SELECT * FROM user_story.story
                              ORDER BY posted_on DESC`)).rows;
};

const getTags = async () => {
    return (await pool.query('SELECT * FROM user_story.tag')).rows;
};

const getSteps = async () => {
    return (await pool.query('SELECT * FROM user_story.step')).rows;
};

const getImages = async () => {
    return (await pool.query('SELECT * FROM user_story.image')).rows;
};

const getStoryById = async (storyId) => {
    const res = (await pool.query(`SELECT * FROM user_story.story
                                   WHERE story_id = $1`,
                                   [storyId]));

    return res.rows[0];
};

const getStepsByStoryId = async (storyId) => {
    return (await pool.query(`SELECT s.*, i.*, si.step_image_id
                              FROM user_story.step s
                                INNER JOIN user_story.step_image si ON (s.step_id = si.step_id)
                                INNER JOIN user_story.image i ON (si.image_id = i.image_id)
                              WHERE s.story_id = $1
                              ORDER BY s.step_position ASC`,
                              [storyId])).rows
};

const getImagesByStepId = async (stepId) => {
    return (await pool.query(`SELECT si.step_image_id, i.*
                              FROM user_story.image i
                                INNER JOIN user_story.step_image si ON (i.image_id = si.image_id)
                              WHERE si.step_id = $1
                              ORDER BY i.image_id DESC`,
                              [stepId])).rows
};

const getTagsByStoryId = async (storyId) => {
    return (await pool.query(`SELECT st.story_tag_id, t.*
                              FROM user_story.tag t
                                INNER JOIN user_story.story_tag st
                                ON (t.tag_id = st.tag_id)
                              WHERE st.story_id = $1`,
                              [storyId])).rows
};

const getStoriesByTagId = async (tagId) => {
    return (await pool.query(`SELECT st.story_tag_id, s.*
                              FROM user_story.story s
                                INNER JOIN user_story.story_tag st
                                ON (s.story_id = st.story_id)
                              WHERE st.tag_id = $1`,
                              [tagId]))
};

//Add data:
const addStory = async (story) => {
    const res = await pool.query(`INSERT INTO user_story.story (story_title, story_posted_on)
                      VALUES ($1, $2)
                      RETURNING *`,
                      [story.title, story.postedOn]);
    
    return res.rows[0];
};

const addTag = async (tag) => {
    const res = await pool.query(`INSERT INTO user_story.tag (tag_title)
                      VALUES ($1)
                      RETURNING *`,
                      [tag.title]);
                      
    return res.rows[0];
};

const addStoryTag = async (storyId, tagId) => {
    await pool.query(`INSERT INTO user_story.story_tag (story_id, tag_id)
                      VALUES ($1, $2)`,
                      [storyId, tagId]);
};

const addStep = async (step) => {
    const res = await pool.query(`INSERT INTO user_story.step (story_id, step_title, step_content, step_position)
                      VALUES ($1, $2, $3, $4)
                      RETURNING *`
                      [step.storyId, step.title, step.content, step.position]);

    return res.rows[0];
};

const addImage = async (image) => {
    await pool.query(`INSERT INTO user_story.image (image_title, image_img, image_caption)
                      VALUES ($1, $2, $3)`
                      [image.title, image.img, image.caption]);
};

const addStepImage = async (stepId, imageId) => {
    await pool.query(`INSERT INTO user_story.step_image (step_id, image_id)
                      VALUES ($1, $2)`
                      [stepId, imageId]);
};

//Upddate data:
const updateStory = async (storyId, story) => {
    await pool.query(`UPDATE user_story.story
                      SET story_title = $1
                      WHERE story_id = $2`
                      [story.title, storyId]);
};

const updateTag = async (tagId, tag) => {
    await pool.query(`UPDATE user_story.tag
                      SET tag_title = $1
                      WHERE tag_id = $2`,
                      [tag.title, tagId]);
};

const updateStoryTag = async (storyTagId, storyTag) => {
    await pool.query(`UPDATE user_story.story_tag
                      SET story_id = $1,
                          tag_id = $2
                      WHERE story_tag_id = $3`,
                      [storyTag.storyId, storyTag.tagId, storyTagId]);
};

const updateStep = async (stepId, step) => {
    await pool.query(`UPDATE user_story.step
                      SET story_id = $1,
                          step_title = $2,
                          step_content = $3,
                          step_position = $4
                      WHERE step_id = $5`,
                      [step.storyId, step.title, step.content, step.position, stepId]);
};

const updateImage = async (imageId, image) => {
    await pool.query(`UPDATE user_story.image
                      SET image_title = $1,
                          image_img = $2,
                          image_caption = $3
                      WHERE image_id = $4`,
                      [image.title, image.img, image.caption, imageId]);
};

const updateStepImage = async (stepImageId, stepImage) => {
    await pool.query(`UPDATE user_story.step_image
                      SET step_id = $1,
                          image_id = $2
                      WHERE step_image_id = $3`,
                      [stepImage.stepId, stepImage.imageId, stepImageId]);
};

//Delete data:
const deleteStory = async (storyId) => {
    await pool.query(`DELETE FROM user_story.story WHERE story_id = $1`,[storyID]);
};

const deleteTag = async (tagId) => {
    await pool.query(`DELETE FROM user_story.tag WHERE tag_id = $1`, [tagId]);
};

const deleteStoryTag = async (storyTagId) => {
    await pool.query(`DELETE FROM user_story.story_tag WHERE story_tag_id = $1`, [storyTagId]);
};

const deleteStep = async (stepId) => {
    await pool.query('DELETE FROM user_story.step WHERE step_id = $1', [stepId]);
};

const deleteImage = async (imageId) => {
    await pool.query(`DELETE FROM user_story.image WHERE image_id = $1`, [imageId]);
};

const deleteStepImage = async (stepImageId) => {
    await pool.query(`DELETE FROM user_story.step_image WHERE step_image_id = $1`, [stepImageId]);
};

module.exports.dbService = {
    getStories,
    getTags,
    getSteps,
    getImages,
    getStoryById: getStoryById,
    getStepsByStoryId,
    getImagesByStepId,
    getTagsByStoryId,
    getStoriesByTagId,
    addStory,
    addTag,
    addStoryTag,
    addStep,
    addImage,
    addStepImage,
    updateStory,
    updateTag,
    updateStoryTag,
    updateStep,
    updateImage,
    updateStepImage,
    deleteStory,
    deleteTag,
    deleteStoryTag,
    deleteStep,
    deleteImage,
    deleteStepImage
};