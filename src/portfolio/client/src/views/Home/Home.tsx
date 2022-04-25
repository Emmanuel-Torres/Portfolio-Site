import { FC } from "react";
import SocialMedia from "../../components/UI/SocialMedia/SocialMedia";
import styles from './Home.module.css'
import image from '../../assets/images/20220311_144355.jpg'

const Home: FC = (): JSX.Element => {
    return (
        <main className={styles.main}>
            <img src={image} className={styles.image} />
            <div className={styles.container}>
                <h1 className={styles.header}>Hello! My name is Emmanuel</h1>
                <p className={styles.content}>
                    I am a Software Engineer that specializes in Web Development, who is based in Utah.
                    I love to use React for developing Front End applications and ASP.NET for developing the Back End.
                    I am always looking for new things to learn and new problems to solve.
                    My goal is to keep growing as a Software Engineer; writing code to solve problems.
                </p>
                <SocialMedia />
            </div>
        </main>
    )
};

export default Home;