import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar: FC = (): JSX.Element => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles['navbar-nav']}>
                <li className={styles['navbar-item']}>
                    <NavLink className={styles.link} to='/'>Emmanuel Torres</NavLink>
                </li>
                <li className={styles['navbar-item']}>
                    <NavLink className={styles.link} to='/'>Home</NavLink>
                </li>
                <li className={styles['navbar-item']}>
                    <NavLink className={styles.link} to='/stories'>Stories</NavLink>
                </li>
                <li className={styles['navbar-item']}>
                    <NavLink className={styles.link} to='/projects'>Projects</NavLink>
                </li>
                <li className={styles['navbar-item']}>
                    <NavLink className={styles.link} to='/about'>About Me</NavLink>
                </li>
            </ul>
            
        </nav>
    )
};

export default NavBar;