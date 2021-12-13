import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useStoreSelector } from "../../store";
import { getStoryById } from "../../store/story-slice";
import StoryStep from "./StoryStep";

const StoryDetails: FC = (): JSX.Element => {
    const params = useParams();
    const currentStory = useStoreSelector(state => state.story.currentStory);
    const dispatch = useDispatch();
    const storyId: number = parseInt(params.storyid ?? '-1')

    useEffect(() => {
        console.log(storyId)
        dispatch(getStoryById(storyId));
    }, [dispatch, storyId]);

    useEffect(() => {
        console.log(currentStory)
    }, [currentStory])

    return (
        <div className='p-2'>
            <h3 className='fw-bold text-center'>{currentStory?.story_title}</h3>
            <div className='row'>
                <div className='col-4'>
                    {currentStory?.story_steps.map(s => <p key={s.step_id}>{s.step_title}</p>)}
                </div>
                <div className='col-8'>
                    {currentStory?.story_steps.map(s => <StoryStep key={s.step_id} step={s} />)}
                </div>
            </div>
        </div>
    )
};

export default StoryDetails;