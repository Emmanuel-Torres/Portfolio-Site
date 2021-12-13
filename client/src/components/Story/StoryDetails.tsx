import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useStoreSelector } from "../../store";
import { getStoryById } from "../../store/story-slice";
import StoryStep from "./StoryStep";
import styles from "./StoryDetails.module.css"

const StoryDetails: FC = (): JSX.Element => {
    const params = useParams();
    const currentStory = useStoreSelector(state => state.story.currentStory);
    const dispatch = useDispatch();
    const storyId: number = parseInt(params.storyid!)

    useEffect(() => {
        console.log(storyId)
        dispatch(getStoryById(storyId));
    }, [dispatch, storyId]);

    useEffect(() => {
        console.log(currentStory)
    }, [currentStory])

    return (
        <>
            <h3 className='fw-bold text-center border-bottom border-dark border-2 p-2 w-100'>
                {currentStory?.story_title}
            </h3>
            <div className='d-flex mx-2'>
                <aside className='vh-100'>
                    <ul className='list-group'>
                        {currentStory?.story_steps.map(s => (
                            <li className="list-group-item" key={s.step_id}>
                                <a className="text-decoration-none" href={`#step-${s.step_id}`}>
                                    {s.step_title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>
                <div className='vh-100 overflow-auto'>
                    {currentStory?.story_steps.map(s => <StoryStep key={s.step_id} step={s} />)}
                </div>
            </div>
        </>
    )
};

export default StoryDetails;