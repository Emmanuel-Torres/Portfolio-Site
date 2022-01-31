import { ChangeEvent, FC, FormEvent, useState } from 'react';
import Story from '../../models/story';

type Props = {
    onSubmitStory: (story: Story) => void
};

const StoryForm: FC<Props> = (props): JSX.Element => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>();
    const [mainImageUrl, setMainImageUrl] = useState<string>();
    const [tags, setTags] = useState<string>();

    const titleChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const contentChangedHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };

    const mainImageUrlChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMainImageUrl(event.target.value);
    };

    const tagsChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTags(event.target.value);
    };

    const submitStoryHandler = (event: FormEvent) => {
        event.preventDefault()

        const story = new Story(title, (new Date()).toISOString(), content, mainImageUrl, tags);
        props.onSubmitStory(story);
    }

    return (
        <form className='p-2' onSubmit={submitStoryHandler}>
            <label className='form-label' htmlFor='story-title'>Story Title</label>
            <input className='form-control' type='text' name='story-title' value={title} onChange={titleChangedHandler} />
            
            <label className='form-label' htmlFor='story-main-image-url'>Image Url</label>
            <input className='form-control' type='text' name='story-main-image-url' value={mainImageUrl} onChange={mainImageUrlChangedHandler} />
            
            <label className='form-label' htmlFor='story-tags'>Tags</label>
            <input className='form-control' type='text' name='story-tags' value={tags} onChange={tagsChangedHandler} />
                        
            <label className='form-label' htmlFor='story-content'>Content</label>
            <textarea className='form-control' name='story-content' value={content} onChange={contentChangedHandler} />
                        
            <button className='btn btn-danger me-2' type='button'>Cancel</button>
            <button className='btn btn-primary' type='submit'>Create Story</button>
        </form>
    )
}

export default StoryForm;