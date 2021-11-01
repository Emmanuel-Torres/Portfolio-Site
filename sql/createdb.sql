DROP TABLE IF EXISTS user_story.step_image;
DROP TABLE IF EXISTS user_story.image;
DROP TABLE IF EXISTS user_story.step;
DROP TABLE IF EXISTS user_story.story_tag;
DROP TABLE IF EXISTS user_story.tag;
DROP TABLE IF EXISTS user_story.story;

DROP SCHEMA IF EXISTS user_story;
CREATE SCHEMA IF NOT EXISTS user_story;

CREATE TABLE IF NOT EXISTS user_story.story (
    story_id SERIAL PRIMARY KEY,
    story_title VARCHAR(80) NOT NULL,
    story_posted_on TIMESTAMP NOT NULL 
);

CREATE TABLE IF NOT EXISTS user_story.tag (
    tag_id SERIAL PRIMARY KEY,
    tag_title VARCHAR(80) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_story.story_tag (
    story_tag_id SERIAL PRIMARY KEY,
    story_id INT NOT NULL,
    tag_id INT NOT NULL,
    FOREIGN KEY (story_id) REFERENCES user_story.story (story_id),
    FOREIGN KEY (tag_id) REFERENCES user_story.tag (tag_id)
);

CREATE TABLE IF NOT EXISTS user_story.step (
    step_id SERIAL PRIMARY KEY,
    story_id INT NOT NULL,
    step_title VARCHAR(80) NOT NULL,
    step_content TEXT NOT NULL,
    step_position INT UNIQUE NOT NULL CHECK (step_position >= 0),
    FOREIGN KEY (story_id) REFERENCES user_story.story (story_id)
);

CREATE TABLE IF NOT EXISTS user_story.image (
    image_id SERIAL PRIMARY KEY,
    image_title VARCHAR(80) NOT NULL,
    image_img BYTEA NOT NULL,
    image_caption VARCHAR(255) 
);

CREATE TABLE IF NOT EXISTS user_story.step_image (
    step_image_id SERIAL NOT NULL,
    step_id INT NOT NULL,
    image_id INT NOT NULL,
    FOREIGN KEY (step_id) REFERENCES user_story.step (step_id),
    FOREIGN KEY (image_id) REFERENCES user_story.image (image_id)
);