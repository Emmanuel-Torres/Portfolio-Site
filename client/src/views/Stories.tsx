import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getStories } from '../store/story-slice'
import { useStoreSelector } from '../store';
import StoryCard from '../components/Story/StoryCard';

const Stories: FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const stories = useStoreSelector(state => state.story.stories);

    useEffect(() => {
        dispatch(getStories())
    }, [dispatch]);

    return (
        <div className='row p-2'>
            {stories.map(s => <StoryCard key={s.story_id} story={s} />)}
        </div>
    )
};

export default Stories;