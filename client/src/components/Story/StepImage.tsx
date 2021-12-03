import { FC } from "react";
import Image from "../../models/image";

type Props = {
    image: Image
}

const StepImage: FC<Props> = (props): JSX.Element => {
    return (
        <>
            <p>{props.image.image_title}</p>
            <img src={props.image.image_url} alt={props.image.image_title} width='25%'/>
            <p>{props.image.image_caption}</p>
        </>
    )
}

export default StepImage;