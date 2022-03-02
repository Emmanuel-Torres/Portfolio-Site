import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getStories } from '../store/story-slice'
import { StoreDispatch, useStoreSelector } from '../store';
import StoryCard from '../components/Story/StoryCard';

const Stories: FC = (): JSX.Element => {
    const dispatch = useDispatch<StoreDispatch>();
    const stories = useStoreSelector(state => state.story.stories);

    useEffect(() => {
        dispatch(getStories())
    }, [dispatch]);

    return (
        <div className='row m-0 p-2'>
            {stories.map(s => <StoryCard key={s.id} story={s} />)}
        </div>
    )
};

export default Stories;