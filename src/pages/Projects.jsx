import { useEffect, useState } from 'react';
import ProjectCard from '../components/projects/ProjectCard';

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/data/projects.json')
            .then((res) => res.json())
            .then(setProjects);
    }, []);

    return (
        <section>
            <h1>Projects</h1>

            <div className='projects-grid'>
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    );
}
