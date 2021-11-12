INSERT INTO user_story.story (story_title, story_posted_on)
    VALUES ('Full stack app using docker', '10-21-2021'),
           ('Creating a database for posts using PostgreSQL', '10-21-2021');

INSERT INTO user_story.step (story_id, step_title, step_content, step_position)
    VALUES (1, 'Becoming familiar with the technology', 'I am still new to the entire container world. Because of this, I had to start in the same place where every programmer should start when learning a new technology: Google. I started by actually searching the docker-compose documentation and trying to get familiarized with what docker-compose is, and how it works.', 1),
           (1, 'Containerizing my applications', 'After getting a better understanding about compose, I realized that I had to containerize my applications into docker containers. For that I had to write a dockerfile for my front end and my backend. I had to do some research, and ask for some help from some peers to get me going with this idea. After that I was able to run my applications as docker containers.', 2),
           (1, 'Write the docker-compose file', 'Once I got my apps running as containers, it was just a matter of how I would declare them on my docker-compose file. WIth some help from the docs, I was able to put together the following docker-compose file, which includes an instance of my API, React Front End, and Postgres database:', 3),
           (1, 'Providing an initialization schema for my database', 'This step actually took me some time to figure out, because I was not able to find that much documentation about it online. However, with the clues given by the Postgres container docs on the docker hub, and a little bit more help from another peer, and the knowledge that I have in Postgres databases I was able to provide an initialization schema to my database container running a postgres. This is the initialization script being used on line 31 of the docker-compose file.', 4),
           (1, 'Learning outcomes', 'This project gave me a very good understanding on what docker is, and how it can be a great addition to a project. Putting aside how difficult it was for me to get the idea of Docker at first, I can say that now that I have gotten more exposure to this technology I have come to like it. This experience also showed me what are some good techniques that I can use when learning a new technology that I am not familiar with.', 5),
           (2, 'Creating a database', 'I was able to create a database using a docker container running a PostgreSQL instance. The Schema definition looks like the following:', 1),
           (2, 'Connecting API to the database', 'After defining my tables and inserting some data, I was able to connect my app (in this case an Express JS API) to my database. I used pg npm to do this:', 2),
           (2, 'Writing CRUD queries', 'After establishing the connection, I was able to write CRUD operations on my database. These operations look like the following:', 3),
           (2, 'Learning outcomes', 'This was a very good exercise to refresh my memory on database skills, and it was a great way to start a full stack project that I plan to keep growing in the future.', 4);

INSERT INTO user_story.image (image_title, image_url, image_caption)
    VALUES ('Sample 1', 'http://images3.memedroid.com/images/UPLOADED194/5eb5eb36e6299.jpeg', 'michi triste'),
           ('Sample 2', 'https://64.media.tumblr.com/27dc9cd8cea0bff5bc030b5b5ccf4ef8/b14260eb06673624-eb/s500x750/7fe08c2f47411464643b7fe07c23605933da92de.jpg', 'mini michi');

INSERT INTO user_story.step_image (step_id, image_id)
    VALUES (1, 1),
           (1, 2);

INSERT INTO user_story.tag (tag_title)
    VALUES ('NodeJS'),
           ('API'),
           ('JavaScript'),
           ('PostgreSQL'),
           ('React'),
           ('Docker');