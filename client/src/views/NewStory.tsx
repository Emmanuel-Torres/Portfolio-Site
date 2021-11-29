import { FC } from "react";
import { useDispatch } from "react-redux";
import StoryForm from "../components/Forms/StoryForm";
import Story from "../models/story";
import { addStory } from "../store/story-form-slice";

type Props = {

}

const NewStory: FC<Props> = (): JSX.Element => {
    const dispatch = useDispatch();
    
    const submitNewStoryHandler = (story: Story) => {
        dispatch(addStory(story));
    }
    
    return (
        <StoryForm onSubmitStory={submitNewStoryHandler}/>
    );
}

export default NewStory;