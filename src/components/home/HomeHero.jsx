import { Link } from 'react-router';

export default function HomeHero() {
    return (
        <section className='home-hero'>
            <div className='home-hero-content'>
                <h1>Alkis</h1>

                <h2>Frontend Developer</h2>

                <p>
                    I build modern React applications with clean architecture,
                    scalable structure, and production-ready deployment.
                </p>

                <div className='home-hero-tech'>
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>REST APIs</span>
                    <span>WordPress</span>
                    <span>Headless CMS</span>
                </div>

                <div className='home-hero-actions'>
                    <Link to='/projects'>View Projects</Link>

                    <a
                        href='https://github.com/1nv1nc1bl3'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        GitHub
                    </a>

                    <a
                        href='https://www.linkedin.com/in/alkis-karagiannis/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}
