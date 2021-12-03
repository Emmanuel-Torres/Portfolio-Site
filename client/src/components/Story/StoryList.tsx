import { FC } from "react";
import Story from "../../models/story";
import StoryCard from "./StoryCard";

type Props = {
    stories: Story[]
}

const StoryList: FC<Props> = (props): JSX.Element => {
    return (
        <div className='continer-fluid'>
            <div className='row'>
                {props.stories.map(s => <StoryCard story={s} />)}
            </div>
        </div>
    )
};

export default StoryList;