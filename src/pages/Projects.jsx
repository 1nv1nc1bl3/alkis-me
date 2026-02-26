import { useEffect, useState } from 'react';
import ProjectCard from '../components/projects/ProjectCard';
import Loading from '../components/ui/Loading';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/projects.json')
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <Loading />;

    return (
        <section className='pt-40 pb-24 px-6 md:px-12 bg-white min-h-screen'>
            <div className='max-w-[1800px] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-12 mb-24'>
                    <h1 className='md:col-start-5 md:col-span-8 text-[8vw] md:text-[5vw] font-bold tracking-tighter uppercase leading-none'>
                        All <br /> Projects
                    </h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32'>
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
