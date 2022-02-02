import { FC } from "react";
import Intro from "../components/Home/Intro";
import SocialMedia from "../components/UI/SocialMedia";
import styles from './Home.module.css'

const Home: FC = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <Intro />
            <SocialMedia />
        </div>
    )
};

export default Home;