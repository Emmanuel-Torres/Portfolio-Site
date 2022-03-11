import { FC } from "react";
import { FaHome } from "react-icons/fa";
import { VscBook, VscFilePdf, VscInfo } from "react-icons/vsc"
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
                    <NavLink className={({isActive}) => isActive ? styles['navbar-link-active'] : styles['navbar-link']} to='/'>
                        <span className={styles['link-text']}>Home</span>
                        <FaHome className={styles['link-svg']} />
                    </NavLink>
                </li>
                <li className={styles['navbar-item']}>
                    <NavLink className={({isActive}) => isActive ? styles['navbar-link-active'] : styles['navbar-link']} to='/stories'>
                        <span className={styles['link-text']}>Stories</span>
                        <VscBook className={styles['link-svg']} />
                    </NavLink>
                </li>
                {/* <li className={styles['navbar-item']}>
                    <NavLink className={styles['navbar-link']} to='/projects'>Projects</NavLink>
                </li> */}
                <li className={styles['navbar-item']}>
                    <NavLink className={({isActive}) => isActive ? styles['navbar-link-active'] : styles['navbar-link']} to='/about'>
                        <span className={styles['link-text']}>About Me</span>
                        <VscInfo className={styles['link-svg']} />
                    </NavLink>
                </li>
                <li className={styles['navbar-item']}>
                    <NavLink className={({isActive}) => isActive ? styles['navbar-link-active'] : styles['navbar-link']} to='/'>
                        <span className={styles['link-text']}>Resume</span>
                        <VscFilePdf className={styles['link-svg']} />
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
};

export default NavBar;