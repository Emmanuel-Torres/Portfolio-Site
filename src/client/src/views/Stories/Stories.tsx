import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getStories } from '../../store/story-slice'
import { StoreDispatch, useStoreSelector } from '../../store';
import StoryCard from '../../components/StoryCard/StoryCard';
import styles from './Stories.module.css'

const Stories: FC = (): JSX.Element => {
    const dispatch = useDispatch<StoreDispatch>();
    const stories = useStoreSelector(state => state.story.stories);

    useEffect(() => {
        dispatch(getStories())
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Blogs</h1>
            <ul className={styles.stories}>
                {stories.map((s,i) =>
                    <li key={s.id} className={styles.story}>
                        <StoryCard story={s} />
                    </li>
                )}
            </ul>
        </div>
    )
};

export default Stories;