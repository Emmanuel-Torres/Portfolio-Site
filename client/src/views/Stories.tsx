import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getStories } from '../store/story-slice'
import StoryList from '../components/Story/StoryList'
import { useStoreSelector } from '../store';

const Stories: FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const stories = useStoreSelector(state => state.story.stories);

    useEffect(() => {
        dispatch(getStories())
    }, [dispatch]);

    return (
        <div>
            <StoryList stories={stories} />
        </div>
    )
};

export default Stories;