import { NavLink } from "react-router-dom";

const StoryList = (props) => {
    return (
        <div>
            <ul className='nav flex-column'>
                {props.stories.map(s => {
                    return (
                        <li className='nav-item' key={s.storyId}>
                            <NavLink className='nav-link' activeClassName='nav-link active' to={`/stories/${s.storyId}`}>{s.title}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
};

export default StoryList;