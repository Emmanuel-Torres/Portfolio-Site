import { FC } from "react";
import Step from "../../models/step";
import StepImage from "./StepImage";

type Props = {
    step: Step
}

const StoryStep: FC<Props> = (props): JSX.Element => {
    return (
        <>
            <h5 id={`step-${props.step.step_id}`} className='mt-4'>{props.step.step_title}</h5>
            <p className='m-0'>{props.step.step_content}</p>
            {props.step.step_images.map(i => <StepImage image={i} key={i.image_id} />)}
        </>
    )
};

export default StoryStep;