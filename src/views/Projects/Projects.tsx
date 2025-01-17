import { FC, useEffect, useState } from "react";
import styles from "./Projects.module.css"
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Project from "../../models/project";
import axios from "axios";

const Projects: FC = (): JSX.Element => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        axios.get<Project[]>('/portfolio/projects/projects.json').then(r => setProjects(r.data));
    }, [])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Projects</h1>
            <ul className={styles.projects}>
                {projects.map((p) =>
                    <li className={styles.project}>
                        <ProjectCard project={p} key={p.id} />
                    </li>
                )}
            </ul>
        </div>
    )
};

export default Projects;