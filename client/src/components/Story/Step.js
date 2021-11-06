const Step = (props) => {
    return (
        <>
            <h5>{props.step.title}</h5>
            <p>{props.step.content}</p>
        </>
    )
};

export default Step;