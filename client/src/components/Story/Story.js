import Step from "./Step";

const Story = (props) => {
    return (
        <div>
            <h3>{props.story.story_title}</h3>
            {props.story.steps.map(s => <Step key={s.step_id} step={s} />)}
        </div>
    )
};

export default Story;