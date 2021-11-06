import Step from "./Step";

const Story = (props) => {
    return (
        <div>
            <h3>{props.story.title}</h3>
            {props.story.steps.map(s => <Step key={s.stepId} step={s} />)}
        </div>
    )
};

export default Story;