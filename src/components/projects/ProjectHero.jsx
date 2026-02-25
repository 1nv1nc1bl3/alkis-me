import { Link } from 'react-router';

export default function ProjectHero({ project }) {
    return (
        <section className='project-hero'>
            <img
                src={project.image}
                alt={project.title}
                className='project-hero-image'
            />

            <div className='project-hero-content'>
                <h1>{project.title}</h1>

                <h3>{project.subtitle}</h3>

                <p>{project.description}</p>

                <div className='project-hero-links'>
                    <a
                        href={project.appUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Live Application
                    </a>

                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            View Source Code
                        </a>
                    )}
                </div>

                <Link to='/projects'>← Back to Projects</Link>
            </div>
        </section>
    );
}
