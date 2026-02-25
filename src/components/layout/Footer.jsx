export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className='site-footer'>
            <div className='footer-container'>
                <p>© {year} Alkis — Frontend Developer</p>

                <div className='footer-links'>
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
        </footer>
    );
}
