import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useStoreSelector } from "../../store";
import { getStoryById } from "../../store/story-slice";
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import styles from "./StoryDetails.module.css"
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

const StoryDetails: FC = (): JSX.Element => {
    const params = useParams();
    const currentStory = useStoreSelector(state => state.story.currentStory);
    const dispatch = useDispatch();
    const storyId: number = parseInt(params.storyid!)

    useEffect(() => {
        dispatch(getStoryById(storyId));
    }, [dispatch, storyId]);

    const image = <img src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" alt="drawing" width="200"/>

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h3>
                    {currentStory?.title}
                </h3>
            </header>
            <main>
                <ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeSanitize]}>
                    {currentStory?.content ?? ''}
                </ReactMarkdown>
            </main>
        </div>
    )
};

export default StoryDetails;