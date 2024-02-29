import { FC } from "react"
import Project from "../../models/project";
import styles from "./ProjectCard.module.css"

type Props = {
    project: Project
}

const ProjectCard: FC<Props> = (props): JSX.Element => {
    return (
        <div className={styles.container}>
            <img className={styles['card-image']} src={props.project.imageUrl} alt="project" />
            <div className={styles['card-content']}>
                <h1>{props.project.name}</h1>
                <p>{props.project.description}</p>
                <div className={styles['card-button']}>
                    <a className={styles['project-url']}
                        href={props.project.url}
                        target="_blank"
                        rel="noopener noreferrer">Check out project</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;