import HomeHero from '../components/home/HomeHero';
import About from '../components/home/About';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Contact from '../components/home/Contact';

export default function Home() {
    return (
        <main>
            <HomeHero />

            <About />

            <FeaturedProjects />

            <Contact />
        </main>
    );
}
