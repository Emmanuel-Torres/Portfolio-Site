DROP TABLE IF EXISTS user_story.story;

DROP SCHEMA IF EXISTS user_story;
CREATE SCHEMA IF NOT EXISTS user_story;

CREATE TABLE IF NOT EXISTS user_story.story (
    story_id SERIAL PRIMARY KEY,
    story_title VARCHAR(80) NOT NULL,
    story_posted_on TIMESTAMP NOT NULL,
    story_content TEXT
);