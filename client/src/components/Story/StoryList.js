import { NavLink } from "react-router-dom";

const StoryList = (props) => {
    return (
        <div>
            <ul className='nav flex-column'>
                {props.stories.map(s => {
                    return (
                        <li className='nav-item' key={s.story_id}>
                            <NavLink className='nav-link' activeClassName='nav-link active' to={`/stories/${s.story_id}`}>{s.story_title}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
};

export default StoryList;