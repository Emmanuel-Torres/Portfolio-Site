import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'

const NavBar: FC = (): JSX.Element => {
    const linkStyle = styles.link;

    return (
        <nav className={styles.nav}>
            <NavLink className={linkStyle} to='/home'>Emmanuel's Portfolio</NavLink>
            <NavLink className={linkStyle} to='/home'>Home</NavLink>
            <NavLink className={linkStyle} to='/stories'>Stories</NavLink>
            <NavLink className={linkStyle} to='/projects'>Projects</NavLink>
            <NavLink className={linkStyle} to='/new-story'>Add Story</NavLink>
            <NavLink className={linkStyle} to='/about'>About Me</NavLink>
        </nav>
    )
};

export default NavBar;