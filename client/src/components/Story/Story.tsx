import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useStoreSelector } from "../../store";
import { getStoryById } from "../../store/story-slice";
import StoryStep from "./StoryStep";

const Story: FC = (): JSX.Element => {
    const params = useParams();
    const currentStory = useStoreSelector(state => state.story.currentStory);
    const dispatch = useDispatch();
    const productId: number = parseInt(params.productid ?? '-1')

    useEffect(() => {
        dispatch(getStoryById(productId));
    }, [dispatch, productId]);

    return (
        <div>
            <h3>{currentStory?.story_title}</h3>
            {currentStory?.story_steps.map(s => <StoryStep key={s.step_id} step={s} />)}
        </div>
    )
};

export default Story;