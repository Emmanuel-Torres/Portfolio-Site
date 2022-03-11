import { FC } from "react";
import SocialMedia from "../../components/UI/SocialMedia/SocialMedia";
import styles from './Home.module.css'
import image from '../../assets/images/20220311_144355.jpg'

const Home: FC = (): JSX.Element => {
    return (
        <main className={styles.main}>
            <img src={image} className={styles.image} />
            <div className={styles.container}>
                <h2 className={styles.header}>Hello! My name is Emmanuel</h2>
                <p className={styles.content}>
                    I am a Software Engineer that specializes in Web Development, that is based in Utah.
                    I love to use technologies like React for the Front End and ASP.NET for the Back End.
                    I am always looking for new things to learn and new problems to solve.
                    My main goal is to keep growing as a Software Engineer, while I solve problems writing code.
                </p>
                <SocialMedia />
            </div>
        </main>
    )
};

export default Home;