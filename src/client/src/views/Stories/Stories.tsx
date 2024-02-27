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
        <ul className={styles.stories}>
            {stories.map(s =>
                <li className={styles.story}>
                    <StoryCard key={s.id} story={s} />
                </li>
            )}
        </ul>
    )
};

export default Stories;