import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { StoreDispatch, useStoreSelector } from "../store";
import { deleteStory, getStories } from "../store/story-slice";

const Admin: FC = (): JSX.Element => {
    const dispatch = useDispatch<StoreDispatch>();
    const stories = useStoreSelector(state => state.story.stories);

    useEffect(() => {
        dispatch(getStories());
    }, [dispatch])

    const deleteStoryHandler = (storyId: number) => {
        dispatch(deleteStory(storyId));
    }

    const editStoryHandler = (storyId: number) => {

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
        </>
    )
}

export default Admin;