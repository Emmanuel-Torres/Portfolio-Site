import { FC } from "react";
import { BiNotepad, BiHomeAlt } from "react-icons/bi";
import { BiArchive } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar: FC = (): JSX.Element => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles['navbar-nav']}>
                <li className={`${styles['navbar-item']} ${styles['navbar-logo']}`}>
                    <NavLink className={styles['navbar-link']} to='/'>
                        <span className={styles['link-text']}>Emmanuel Torres</span>
                    </NavLink>
                </li>
                <li className={styles['navbar-item']}>
                    <NavLink className={({ isActive }) => isActive ? styles['navbar-link-active'] : styles['navbar-link']} to='/'>
                        <span className={styles['link-text']}>Home</span>
                        <BiHomeAlt  className={styles['link-svg']} />
                    </NavLink>
                </li>
                <li className={styles['navbar-item']}>
                    <NavLink className={({ isActive }) => isActive ? styles['navbar-link-active'] : styles['navbar-link']} to='/blog'>
                        <span className={styles['link-text']}>Blog</span>
                        <BiNotepad className={styles['link-svg']} />
                    </NavLink>
                </li>
                <li className={styles['navbar-item']}>
                    <NavLink className={({ isActive }) => isActive ? styles['navbar-link-active'] : styles['navbar-link']} to='/projects'>
                        <span className={styles['link-text']}>Projects</span>
                        <BiArchive className={styles['link-svg']} />
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
};

export default NavBar;