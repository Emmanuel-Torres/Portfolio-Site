import { NavLink } from "react-router-dom";

const NavBar = (props) => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-secondary'>
            <div className='container-fluid'>
                <NavLink className='navbar-brand' to='/home'>Portfolio</NavLink>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarLinks'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarLinks'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0 justify-content-end'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/home'>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/stories'>Stories</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/projects'>Projects</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/new-story'>Add Story</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;