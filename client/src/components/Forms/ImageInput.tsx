import { FC } from "react"
import Image from "../../models/image";

type Props = {
    image: Image
}

const ImageInput: FC<Props> = (props): JSX.Element => {
    return (
        <>
            <br />
            <label>Image Title</label>
            <input type='text' />
            <label>Image URL</label>
            <input type='text' />
        </>
    )
};

export default ImageInput;