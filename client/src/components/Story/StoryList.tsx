import { FC } from "react";
import { NavLink } from "react-router-dom";
import Story from "../../models/story";

type Props = {
    stories: Story[]
}

const StoryList: FC<Props> = (props): JSX.Element => {
    return (
        <div>
            <ul className='nav flex-column'>
                {props.stories.map(s => {
                    return (
                        <li className='nav-item' key={s.story_id}>
                            <NavLink className='nav-link' to={`/stories/${s.story_id}`}>{s.story_title}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
};

export default StoryList;