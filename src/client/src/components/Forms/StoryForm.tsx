import { ChangeEvent, FC, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { StoreDispatch, useStoreSelector } from '../../store';
import { addStep, changeStoryTitle } from '../../store/story-form-slice';
import Story from '../../models/story';
import StepInput from './StepInput';

type Props = {
    onSubmitStory: (story: Story) => void
};

const StoryForm: FC<Props> = (props): JSX.Element => {
    const dispatch = useDispatch<StoreDispatch>();
    const story = useStoreSelector(state => state.storyForm.story)
    const { story_title } = story;

    const storyTitleChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStoryTitle(event.target.value));
    };

    const addStepHandler = () => {
        dispatch(addStep());
    }

    const submitStoryHandler = (event: FormEvent) => {
        event.preventDefault()
        if (story_title.trim().length > 0) {
            props.onSubmitStory(story);
        }
        else {
            alert('You need a title to submit a story.')
        }
    }

    return (
        <form className='p-2' onSubmit={submitStoryHandler}>
            <label className='form-label' htmlFor='story-title'>Story Title</label>
            <input className='form-control' type='text' name='story-title' value={story_title} onChange={storyTitleChangedHandler} />
            <br />
            {story.story_steps.map((s, index) => <StepInput key={index} step_position={index} />)}
            <button className='btn btn-primary my-2' type='button' onClick={addStepHandler}>Add Step</button>
            <br />
            <div className='d-flex justify-content-end'>
                <button className='btn btn-danger me-2' type='button'>Cancel</button>
                <button className='btn btn-primary' type='submit'>Create Story</button>
            </div>
        </form>
    )
}

export default StoryForm;