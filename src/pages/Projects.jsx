import { projects } from '../data/projects';
import { Link } from 'react-router';

export default function Projects() {
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
