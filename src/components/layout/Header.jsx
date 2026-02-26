import { Link } from 'react-router';

export default function Header() {
    return (
        <header className='fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12'>
            <div className='max-w-[1800px] mx-auto flex justify-between items-center'>
                <Link
                    to='/'
                    className='text-xl font-bold tracking-tighter hover:opacity-60 transition-opacity'
                >
                    alkis.me
                </Link>

                <nav className='flex gap-6 md:gap-10 text-sm uppercase tracking-widest font-medium'>
                    <Link to='/' className='hover:line-through transition-all'>
                        Home
                    </Link>
                    <Link
                        to='/projects'
                        className='hover:line-through transition-all'
                    >
                        Projects
                    </Link>
                    <a
                        href='https://github.com/1nv1nc1bl3'
                        target='_blank'
                        className='hidden md:block hover:line-through'
                    >
                        GitHub
                    </a>
                    <a
                        href='https://www.linkedin.com/in/alkis-karagiannis/'
                        target='_blank'
                        className='hidden md:block hover:line-through'
                    >
                        LinkedIn
                    </a>
                </nav>
            </div>
        </header>
    );
}
