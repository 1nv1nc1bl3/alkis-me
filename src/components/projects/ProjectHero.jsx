export default function ProjectHero({ project }) {
    return (
        <section className='pt-40 px-6 md:px-12 min-h-screen'>
            <div className='max-w-[1800px] mx-auto w-full'>
                {/* Title Section */}
                <div className='grid grid-cols-1 md:grid-cols-12 gap-8 mb-20'>
                    <h1 className='md:col-start-5 md:col-span-8 text-[10vw] md:text-[7vw] font-bold tracking-tighter uppercase leading-[0.9]'>
                        {project.title}
                    </h1>
                </div>

                {/* Big Image */}
                <div className='w-full aspect-video bg-neutral-100 overflow-hidden mb-20'>
                    <img
                        src={project.image}
                        alt={project.title}
                        className='w-full h-full object-cover'
                    />
                </div>

                {/* Info Grid */}
                <div className='grid grid-cols-1 md:grid-cols-12 gap-12 pb-24'>
                    <div className='md:col-start-5 md:col-span-4'>
                        <h3 className='text-xs uppercase tracking-[0.3em] text-neutral-400 mb-6'>
                            Description
                        </h3>
                        <p className='text-lg leading-relaxed text-neutral-800 italic'>
                            {project.description}
                        </p>
                    </div>
                    <div className='md:col-span-3 flex flex-col gap-8'>
                        <div>
                            <h3 className='text-xs uppercase tracking-[0.3em] text-neutral-400 mb-4'>
                                Tech Stack
                            </h3>
                            <p className='text-sm font-bold uppercase tracking-widest leading-loose'>
                                {project.subtitle}
                            </p>
                        </div>
                        <div className='flex gap-8'>
                            <a
                                href={project.appUrl}
                                target='_blank'
                                className='text-xs uppercase font-bold border-b border-black pb-1'
                            >
                                Live
                            </a>
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target='_blank'
                                    className='text-xs uppercase font-bold border-b border-black pb-1'
                                >
                                    Repo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
