import { FC } from "react";
import styles from "./Projects.module.css"
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Project from "../../models/project";
import jsonProjects from "../../assets/projects/projects.json"

const Projects: FC = (): JSX.Element => {
    const projects = jsonProjects as Project[];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Projects</h1>
            {projects.map((p) => <ProjectCard project={p} key={p.id}/>)}
        </div>
    )
};

export default Projects;