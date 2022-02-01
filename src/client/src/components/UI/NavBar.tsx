import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'

const NavBar: FC = (): JSX.Element => {
    const linkStyle = styles.link;

    return (
        <nav className={styles.nav}>
            <p className={styles.logo}>Emmanuel's Portfolio</p>
            <div className={styles.links}>
                <NavLink className={linkStyle} to='/'>Home</NavLink>
                <NavLink className={linkStyle} to='/stories'>Stories</NavLink>
                <NavLink className={linkStyle} to='/projects'>Projects</NavLink>
                <NavLink className={linkStyle} to='/about'>About Me</NavLink>
            </div>
        </nav>
    )
};

export default NavBar;