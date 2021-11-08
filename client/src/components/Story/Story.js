import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getStoryById } from "../../store/story-slice";
import Step from "./Step";

const Story = (props) => {
    const params = useParams();
    const currentStory = useSelector(state => state.story.currentStory);
    const dispatch = useDispatch();

    const { productid: productId } = params;

    useEffect(() => {
        dispatch(getStoryById(productId));
    }, [dispatch, productId]);

    return (
        <div>
            <h3>{currentStory?.story_title}</h3>
            {currentStory?.story_steps.map(s => <Step key={s.step_id} step={s} />)}
        </div>
    )
};

export default Story;