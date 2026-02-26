import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import ProjectCard from '../projects/ProjectCard';

export default function FeaturedProjects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/data/projects.json')
            .then((res) => res.json())
            .then((data) => {
                const featured = data.filter((p) => p.featured);
                setProjects(featured);
            });
    }, []);

    return (
        <section className='h-screen w-full px-6 md:px-12 bg-white flex flex-col justify-center overflow-hidden'>
            <div className='max-w-[1800px] mx-auto w-full grid grid-cols-1 md:grid-cols-12'>
                {/* Κενό αριστερά (Στήλες 1-4) */}
                <div className='md:col-span-4'></div>

                {/* Περιεχόμενο (Στήλες 5-12) */}
                <div className='md:col-span-8 flex flex-col'>
                    {/* Τίτλος ευθυγραμμισμένος με τις κάρτες */}
                    <div className='flex justify-between items-end mb-12'>
                        <h2 className='text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none'>
                            Selected <br /> Works
                        </h2>
                        <Link
                            to='/projects'
                            className='text-xs uppercase tracking-widest font-bold border-b border-black pb-1'
                        >
                            View All
                        </Link>
                    </div>

                    {/* Grid Projects */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 overflow-y-auto no-scrollbar max-h-[65vh] pr-4'>
                        {projects.map((project) => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
