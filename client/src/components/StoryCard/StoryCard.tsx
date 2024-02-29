import { FC } from "react";
import { Link } from "react-router-dom";
import Blog from "../../models/blog";
import styles from "./StoryCard.module.css"

type Props = {
    story: Blog
}

const StoryCard: FC<Props> = (props): JSX.Element => {
    return (
        <Link to={`/blogs?filename=${props.story.file}`} className={styles.link}>
            <div className={styles.container}>
                <h2>{props.story.title}</h2>
                <div className={styles['inner-container']}>
                    <h3>{props.story.skills}</h3>
                    <h3>{props.story.postedOn}</h3>
                </div>
            </div>
        </Link>
    )
};

export default StoryCard;