import { Link } from 'react-router';

export default function Header() {
    return (
        <header className='site-header'>
            <div className='header-container'>
                {/* Logo / Name */}

                <Link to='/' className='header-logo'>
                    alkis.me
                </Link>

                {/* Navigation */}

                <nav className='header-nav'>
                    <Link to='/'>Home</Link>

                    <Link to='/projects'>Projects</Link>

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
                </nav>
            </div>
        </header>
    );
}
