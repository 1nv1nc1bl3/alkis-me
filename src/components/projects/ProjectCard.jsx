import { Link } from 'react-router';

export default function ProjectCard({ project }) {
    return (
        <article className='group flex flex-col w-full bg-white'>
            <Link
                to={`/projects/${project.slug}`}
                className='relative overflow-hidden aspect-[4/3] bg-neutral-100'
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out'
                />
            </Link>

            <div className='py-6 flex flex-col gap-4'>
                <div className='flex justify-between items-start'>
                    <div className='max-w-[80%]'>
                        <Link to={`/projects/${project.slug}`}>
                            <h2 className='text-2xl font-bold uppercase tracking-tighter hover:opacity-60 transition-opacity'>
                                {project.title}
                            </h2>
                        </Link>
                        <h4 className='text-xs uppercase tracking-[0.2em] text-neutral-500 mt-1 font-medium'>
                            {project.subtitle}
                        </h4>
                    </div>

                    <Link
                        to={`/projects/${project.slug}`}
                        className='text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0'
                    >
                        ↗
                    </Link>
                </div>

                <p className='text-sm text-neutral-600 leading-relaxed line-clamp-2 max-w-md'>
                    {project.description}
                </p>

                <div className='flex gap-6 mt-2'>
                    <a
                        href={project.appUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-[10px] uppercase tracking-widest font-bold border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors'
                    >
                        Live App
                    </a>

                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-[10px] uppercase tracking-widest font-bold border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors'
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
