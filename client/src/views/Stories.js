import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getStories } from '../store/story-slice'
import StoryList from '../components/Story/StoryList'

const Stories = () => {
    const dispatch = useDispatch();
    const stories = useSelector(state => state.story.stories);

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