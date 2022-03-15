import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useStoreSelector } from "../../store";
import { getStoryById } from "../../store/story-slice";
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import styles from "./StoryDetails.module.css"
import rehypeSanitize from "rehype-sanitize";
import CodeBlock from "./CodeBlock";

const StoryDetails: FC = (): JSX.Element => {
    const params = useParams();
    const currentStory = useStoreSelector(state => state.story.currentStory);
    const dispatch = useDispatch();
    const storyId: number = parseInt(params.storyid!)

    useEffect(() => {
        dispatch(getStoryById(storyId));
    }, [dispatch, storyId]);

    return (
        <>
            <header className={styles.header}>
                <h3>
                    {currentStory?.title}
                </h3>
            </header>
            <main className={styles.main}>
                <ReactMarkdown components={CodeBlock} children={currentStory?.content ?? ''} />
            </main>
        </>
    )
};

export default StoryDetails;