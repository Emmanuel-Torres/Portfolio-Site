import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useStoreSelector } from "../../store";
import { getStoryById } from "../../store/story-slice";
import ReactMarkdown from 'react-markdown'
import styles from "./StoryDetails.module.css"

const StoryDetails: FC = (): JSX.Element => {
    const params = useParams();
    const currentStory = useStoreSelector(state => state.story.currentStory);
    const dispatch = useDispatch();
    const storyId: number = parseInt(params.storyid!)

    useEffect(() => {
        dispatch(getStoryById(storyId));
    }, [dispatch, storyId]);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h3>
                    {currentStory?.title}
                </h3>
            </header>
            <main>
                <ReactMarkdown>
                    {currentStory?.content ?? ''}
                </ReactMarkdown>
            </main>
        </div>
    )
};

export default StoryDetails;