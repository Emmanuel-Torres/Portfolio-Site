import { FC } from "react";
import Step from "../../models/step";

type Props = {
    step: Step
}

const StoryStep: FC<Props> = (props): JSX.Element => {
    return (
        <>
            <h5>{props.step.step_title}</h5>
            <p>{props.step.step_content}</p>
        </>
    )
};

export default StoryStep;