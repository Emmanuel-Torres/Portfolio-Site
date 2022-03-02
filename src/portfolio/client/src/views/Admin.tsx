import { unwrapResult } from "@reduxjs/toolkit";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import StoryForm from "../components/Forms/StoryForm";
import Story from "../models/story";
import { StoreDispatch, useStoreSelector } from "../store";
import { addStory, deleteStory, getStories, getStoryById, updateStory } from "../store/story-slice";

const Admin: FC = (): JSX.Element => {
    const dispatch = useDispatch<StoreDispatch>();
    const currentStory = useStoreSelector(state => state.story.currentStory);
    const stories = useStoreSelector(state => state.story.stories);
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState<boolean>(false);

    useEffect(() => {
        dispatch(getStories());
    }, [dispatch]);

    const deleteStoryHandler = (storyId: number) => {
        dispatch(deleteStory(storyId));
    }

    const editStoryHandler = (storyId: number) => {
        setIsEditing(prev => !prev);
        dispatch(getStoryById(storyId));
    }

    const updateStoryHandler = (story: Story) => {
        dispatch(updateStory({ storyId: currentStory!.id!, story }))
            .then(r => {
                if (r.meta.requestStatus === 'fulfilled') {
                    const story = unwrapResult(r)
                    navigate(`/stories/${story.id}`);
                }
                else {
                    alert('Failed to add story.')
                }
            });
    }

    const addStoryHandler = (story: Story) => {
        dispatch(addStory(story))
            .then(r => {
                if (r.meta.requestStatus === 'fulfilled') {
                    const story = unwrapResult(r)
                    navigate(`/stories/${story.id}`);
                }
                else {
                    alert('Failed to add story.')
                }
            });
    }


    return (
        <>
            <h2>This is the admin page. You should probably not be here.</h2>
            <table>
                <thead>
                    <tr>
                        <th>Post</th>
                    </tr>
                </thead>
                <tbody>
                    {stories.map(s => {
                        return (
                            <tr key={s.id!}>
                                <td>{s.title}</td>
                                <td>
                                    <button type="button" onClick={() => deleteStoryHandler(s.id!)}>Remove</button>
                                </td>
                                <td>
                                    <button type="button" onClick={() => editStoryHandler(s.id!)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {!isEditing &&
                <>
                    <h4>Add New Story</h4>
                    <StoryForm onSubmitStory={addStoryHandler} />
                </>}
            {isEditing && currentStory &&
                <>
                    <h4>Edit story {currentStory.id}</h4>
                    <StoryForm onSubmitStory={updateStoryHandler} story={currentStory} />
                </>}
        </>
    )
}

export default Admin;