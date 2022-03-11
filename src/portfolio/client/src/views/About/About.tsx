import { FC } from "react";
import styles from "./About.module.css"

const About: FC = (): JSX.Element => {
    return (
        <>
            <h5>About me</h5>
            <p>
                My name is Emmanuel Torres.
                I am currently a Senior Software Engineering student enrolled in Snow College's SE program, with the expectation to graduate this upcoming May of 2022.
                I am from Honduras, and my native language is Spanish.
            </p>

            <h5>Why programming?</h5>
            <p>
                Since I was in highschool, I always found computers to be interesting, yet very mysterious. I never came to fully understand them until I got to college.
                In 2018, I found out about Snow college, and with the help of an advisor, I enrolled as a freshman for the fall that same year.
                At first, I wanted to do a Bachelor's in Computer Science. However, after finishing my first programming class, and having a short conversation with a professor, I decided to stay in the Software Engineering program offered in Snow.
                After that first exposure to programming, I realized that I liked it a lot. I liked the challenge of taking an idea, and converting it into code that a computer can run.
                This sense of accomplishment is what motivates me to keep going forward; To keep trying even if I fail in my first or second attempt. This is why I love to be a Software Engineer.
            </p>

            <h5>Hobbies</h5>
            <p>
                Some of my hobbies include playing video games, doing mountain biking, and playing drums. 
                When I am not codding, I love to play games that have an engaging story, or that are packed with high octane action. Probably my favorite video game is Rainbow Six Siege.
                Mountain biking is also one of my favorite things to do, because I like how it feels to be outdoors, at the same time that I am cruising down a trail or dirt road.
                I enjoy the challenge of getting up the mountain by just pedaling up there. This makes the way down to feel more rewarding, and helps me to keep myself physically active.
                Lastly, my last hobby is to play drums. Since I was a kid I was always intrigued about percussion in general, so when I got to play drums for the first time, I liked it very much.
                Although I am not a great musician, I still have a good time when playing drums.
            </p>
        </>
    )
}

export default About;