import { FC } from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import styles from './SocialMedia.module.css'

type Props = {
}

const SocialMedia: FC<Props> = (props): JSX.Element => {
    return (
        <div className={styles.container}>
            <a href='https://www.linkedin.com/in/emmanuel-torres-580516220/'
               className={styles.a}
               target='_blank'
               rel='noopener noreferrer'>
                <FaLinkedin />
            </a>
            <a href='https://github.com/Emmanuel-Torres'
               className={styles.a}
               target='_blank'
               rel='noopener noreferrer'>
                <FaGithub />
            </a>
        </div>
    )
}

export default SocialMedia;