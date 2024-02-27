import { FC } from "react";
import { Link } from "react-router-dom";
import Story from "../../models/story";
import styles from "./StoryCard.module.css"

type Props = {
    story: Story
}

const StoryCard: FC<Props> = (props): JSX.Element => {
    return (
        <Link to={`/blog/${props.story.id}`} className={styles.link}>
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