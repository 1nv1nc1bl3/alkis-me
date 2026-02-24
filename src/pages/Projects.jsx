import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/data/projects.json')
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <div>
            <h1>Projects</h1>

            {projects.map((project) => (
                <div key={project.slug}>
                    <h2>
                        <Link to={`/projects/${project.slug}`}>
                            {project.title}
                        </Link>
                    </h2>

                    <a href={project.appUrl}>Open App</a>
                </div>
            ))}
        </div>
    );
}
