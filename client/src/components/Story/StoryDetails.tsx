import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useStoreSelector } from "../../store";
import { getStoryById } from "../../store/story-slice";
import StoryStep from "./StoryStep";
import styles from "./StoryDetails.module.css"

const StoryDetails: FC = (): JSX.Element => {
    const params = useParams();
    const currentStory = useStoreSelector(state => state.story.currentStory);
    const dispatch = useDispatch();
    const storyId: number = parseInt(params.storyid!)

    useEffect(() => {
        console.log(storyId)
        dispatch(getStoryById(storyId));
    }, [dispatch, storyId]);

    useEffect(() => {
        console.log(currentStory)
    }, [currentStory])

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h3>
                    {currentStory?.story_title}
                </h3>
            </header>
            <aside className={styles.aside}>
                <ul className={styles.ul}>
                    {currentStory?.story_steps.map(s => (
                        <li className={styles.li}>
                            <a className={styles.a} href={`#step-${s.step_id}`}>
                                {s.step_title}
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>
            <main>
                {currentStory?.story_steps.map(s => <StoryStep key={s.step_id} step={s} />)}
            </main>
        </div>
    )
};

export default StoryDetails;