import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import ProjectCard from '../projects/ProjectCard';

export default function FeaturedProjects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/data/projects.json')
            .then((res) => res.json())
            .then((data) => {
                // show only first 3 projects
                const featured = data.slice(0, 3);

                setProjects(featured);
            });
    }, []);

    return (
        <section className='featured-projects'>
            <h2>Featured Projects</h2>

            <div className='projects-grid'>
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>

            <Link to='/projects'>View All Projects →</Link>
        </section>
    );
}
