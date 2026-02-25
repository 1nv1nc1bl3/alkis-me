import { Link } from 'react-router';

export default function ProjectCard({ project }) {
    return (
        <article className='project-card'>
            <Link to={`/projects/${project.slug}`}>
                <img src={project.image} alt={project.title} />

                <h2>{project.title}</h2>

                <h4>{project.subtitle}</h4>

                <p>{project.description}</p>
            </Link>

            <div className='project-links'>
                <a
                    href={project.appUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Live App
                </a>

                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        GitHub
                    </a>
                )}
            </div>
        </article>
    );
}
