const Step = (props) => {
    return (
        <>
            <h5>{props.step.step_title}</h5>
            <p>{props.step.step_content}</p>
        </>
    )
};

export default Step;