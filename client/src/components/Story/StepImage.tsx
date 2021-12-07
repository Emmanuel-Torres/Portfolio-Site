import { FC } from "react";
import Image from "../../models/image";

type Props = {
    image: Image
}

const StepImage: FC<Props> = (props): JSX.Element => {
    return (
        <>
            <p className='m-0 mt-2 fw-light fst-italic'>{props.image.image_title}</p>
            <img src={props.image.image_url} alt={props.image.image_caption}/>
        </>
    )
}

export default StepImage;