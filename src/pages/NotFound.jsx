import { Link } from 'react-router';

export default function NotFound() {
    return (
        <main className='not-found'>
            <h1>404</h1>

            <h2>Page not found</h2>

            <p>The page you're looking for doesn't exist or has been moved.</p>

            <Link to='/'>Return to homepage</Link>
        </main>
    );
}
