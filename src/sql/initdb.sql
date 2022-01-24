<<<<<<< HEAD:sql/initdb.sql
=======
INSERT INTO user_story.story (story_title, story_posted_on)
    VALUES ('Full stack app using docker', '10-21-2021'),
           ('Creating a database for posts using PostgreSQL', '10-21-2021');

INSERT INTO user_story.step (story_id, step_title, step_content, step_position)
    VALUES (1, 'Becoming familiar with the technology', 'I am still new to the entire container world. Because of this, I had to start in the same place where every programmer should start when learning a new technology: Google. I started by actually searching the docker-compose documentation and trying to get familiarized with what docker-compose is, and how it works.', 1),
           (1, 'Containerizing my API', 'After getting a better understanding about compose, I realized that I had to containerize my applications into docker containers. First I started by wring a dockerfile for my API.', 2),
           (1, 'Containerizing my Front End', 'Once I wrote my API dockerfile, I wrote a docker file of my Front End, however, this one was slightly different. This docker file has two building stages, one that will build my react app, and another that will create an nginx server that will host my app.', 3),
           (1, 'Write the docker-compose file', 'Once I got my apps running as containers, it was just a matter of how I would declare them on my docker-compose file. WIth some help from the docs, I was able to put together the following docker-compose file, which includes an instance of my API, React Front End, and Postgres database:', 3),
           (1, 'Providing an initialization schema for my database', 'This step actually took me some time to figure out, because I was not able to find that much documentation about it online. However, after reading the Postgres container docs on the docker hub, I was able to provide an initialization script for my database container. This is the initialization script being used on line 31 of the docker-compose file.', 4),
           (1, 'Learning outcomes', 'This project gave me a very good understanding on what docker is, and how it can be a great addition to a project. Putting aside how difficult it was for me to get the idea of Docker at first, I can say that now that I have gotten more exposure to this technology I have come to like it. This experience also showed me what are some good techniques that I can use when learning a new technology that I am not familiar with.', 5),
           (2, 'Creating a database', 'I was able to create a database using a docker container running a PostgreSQL instance. The Schema definition looks like the following:', 1),
           (2, 'Connecting API to the database', 'After defining my tables and inserting some data, I was able to connect my app (in this case an Express JS API) to my database. I used pg npm to do this:', 2),
           (2, 'Writing CRUD queries', 'After establishing the connection, I was able to write CRUD operations on my database. These operations look like the following:', 3),
           (2, 'Learning outcomes', 'This was a very good exercise to refresh my memory on database skills, and it was a great way to start a full stack project that I plan to keep growing in the future.', 4);

INSERT INTO user_story.image (image_title, image_url, image_caption)
    VALUES ('API Dockerfile', 'https://emmanuel-portfolio-image-bucket.s3.us-west-2.amazonaws.com/portfolio-images/APIDockerfile.png', 'Dockerfile that describes my API container'),
           ('Front End Dockerfile', 'https://emmanuel-portfolio-image-bucket.s3.us-west-2.amazonaws.com/portfolio-images/FrontEndDockerfile.png', 'Dockerfile that describes my Front End container'),
           ('Portfolio Docker-Compose', 'https://emmanuel-portfolio-image-bucket.s3.us-west-2.amazonaws.com/portfolio-images/PortfolioDockerCompose.png', 'Docker-Compose file that orchestrates my protfolio site'),
           ('Init script for my Database', 'https://emmanuel-portfolio-image-bucket.s3.us-west-2.amazonaws.com/portfolio-images/DbCreationScript.png', 'SQL file that describes my database'),
           ('Portfolio''s VM', 'https://emmanuel-portfolio-image-bucket.s3.us-west-2.amazonaws.com/portfolio-images/PortfolioSite/PortfolioVM.png'),
           ('Actions Runner', 'https://emmanuel-portfolio-image-bucket.s3.us-west-2.amazonaws.com/portfolio-images/PortfolioSite/PortfolioRunner.png', 'GitHub actions runner for my protfolio'),
           ('Secrets Folder', 'https://emmanuel-portfolio-image-bucket.s3.us-west-2.amazonaws.com/portfolio-images/PortfolioSite/PortfolioSecrets.png', 'Folder that has all encrypted secrets'),
           ('CD Pipeline', 'https://emmanuel-portfolio-image-bucket.s3.us-west-2.amazonaws.com/portfolio-images/PortfolioSite/PortfolioCDPipeline.png', 'Action that will deploy my portfolio'),
           ('Successful Deployment', 'https://emmanuel-portfolio-image-bucket.s3.us-west-2.amazonaws.com/portfolio-images/PortfolioSite/PortfolioDeploymnet.png', 'My portfolio was successfully deployed'),
           ('Page Router', 'https://emmanuel-portfolio-image-bucket.s3.us-west-2.amazonaws.com/portfolio-images/PortfolioFrontEnd/PortfolioRouter.png', 'Using react router to route different pages of my portfolio'),
           ('API Service', 'https://emmanuel-portfolio-image-bucket.s3.us-west-2.amazonaws.com/portfolio-images/PortfolioFrontEnd/PortfolioApiService.png', 'Service that allows my front end talk to the API'),
           ('Data Store', 'https://emmanuel-portfolio-image-bucket.s3.us-west-2.amazonaws.com/portfolio-images/PortfolioFrontEnd/PortfolioRedux.png', 'Redux store that holds the share state of my portfolio'),
           ('Story Slice', 'https://emmanuel-portfolio-image-bucket.s3.us-west-2.amazonaws.com/portfolio-images/PortfolioFrontEnd/PortfolioSlice.png', 'Slice that keeps my stories within the redux store'),
           ('Async Thunks', 'https://emmanuel-portfolio-image-bucket.s3.us-west-2.amazonaws.com/portfolio-images/PortfolioFrontEnd/PortfolioThunks.png', 'Thunks that allow my slice use my API service');

INSERT INTO user_story.step_image (step_id, image_id)
    VALUES (2, 1),
           (3, 2),
           (4, 3),
           (5, 4);

INSERT INTO user_story.tag (tag_title)
    VALUES ('NodeJS'),
           ('API'),
           ('JavaScript'),
           ('PostgreSQL'),
           ('React'),
           ('Docker');
>>>>>>> main:src/sql/initdb.sql
