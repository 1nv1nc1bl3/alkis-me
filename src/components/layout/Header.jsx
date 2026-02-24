import { Link } from 'react-router';

export default function Header() {
    return (
        <header>
            <Link to='/'>alkis.me</Link>

            <nav>
                <Link to='/projects'>Projects</Link>

                <Link to='/contact'>Contact</Link>
            </nav>
        </header>
    );
}
