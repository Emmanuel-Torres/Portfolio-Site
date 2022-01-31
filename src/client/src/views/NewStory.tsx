import { unwrapResult } from "@reduxjs/toolkit";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import StoryForm from "../components/Forms/StoryForm";
import Story from "../models/story";
import { StoreDispatch } from "../store";
import { addStory } from "../store/story-slice";

type Props = {

}

const NewStory: FC<Props> = (): JSX.Element => {
    const dispatch = useDispatch<StoreDispatch>();
    const navigate = useNavigate()
    
    const submitNewStoryHandler = (story: Story) => {
        dispatch(addStory(story))
            .then(r => {
                if (r.meta.requestStatus === 'fulfilled') {
                    const story = unwrapResult(r)
                    navigate(`/stories/${story.Id}`)  
                }
                else {
                    alert('Failed to post story.')
                }
            });
    }
    
    return (
        <StoryForm onSubmitStory={submitNewStoryHandler}/>
    );
}

export default NewStory;