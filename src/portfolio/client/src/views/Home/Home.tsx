import { FC } from "react";
import SocialMedia from "../../components/UI/SocialMedia";
import styles from './Home.module.css'

const Home: FC = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Hello! My name is Emmanuel</h2>
            <p className={styles.content}>
                I am a Software Engineer that specializes in Web Development.
                I really like to create Full Stack applications using React for the Front End and ASP.NET for the Back End.
                I am always looking for new things to learn and new problems to solve.
                My main goal is to keep growing as a Software Engineer, while I solve problems writing code.
            </p>
            <SocialMedia />
        </div>
    )
};

export default Home;