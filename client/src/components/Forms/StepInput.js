import { useState } from "react";
import ImageInput from "./ImageInput";

const StepInput = () => {
    const [images, setImages] = useState([]);
    const [stepTitle, setStepTitle] = useState('');

    const titleChangedHandler = () => {

    }

    const addImageHandler = () => {
        setImages(prev => [...prev, <ImageInput />])
    }

    return (
        <>
            <br />
            <label>Step Title</label>
            <input type='text' onChange={titleChangedHandler}/>
            <label>Step Content</label>
            <textarea />
            <button type='button' onClick={addImageHandler}>Add Image</button>
            {images.map(i => i)}
        </>
    )
}

export default StepInput;