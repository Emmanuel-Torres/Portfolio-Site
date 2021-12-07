import { FC, FocusEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import Story from '../../models/story';
import { useStoreSelector } from '../../store';
import { addStep, changeStoryTitle } from '../../store/story-form-slice';
import StepInput from './StepInput';

type Props = {
    onSubmitStory: (story: Story) => void
};

const StoryForm: FC<Props> = (props): JSX.Element => {
    const dispatch = useDispatch();
    const story = useStoreSelector(state => state.storyForm.story)

    const storyTitleChangedHandler = (event: FocusEvent<HTMLInputElement>) => {
        dispatch(changeStoryTitle(event.target.value));
    };

    const addStepHandler = () => {
        dispatch(addStep());
    }

    const submitStoryHandler = (event: FormEvent) => {
        event.preventDefault()
        props.onSubmitStory(story);
    }

    return (
        <form className='p-3' onSubmit={submitStoryHandler}>
            <label className='form-label' htmlFor='story-title'>Story Title</label>
            <input className='form-control' type='text' name='story-title' value={story.story_title} onChange={storyTitleChangedHandler} />
            <br />
            {story.story_steps.map((s, index) => <StepInput key={index} step_position={index} />)}
            <button className='btn btn-primary' type='button' onClick={addStepHandler}>Add Step</button>
            <br />
            <button className='btn btn-danger' type='button'>Cancel</button>
            <button className='btn btn-primary' type='submit'>Create Story</button>
        </form>
    )
}

export default StoryForm;