import { Link } from 'react-router';
export default function HomeHero() {
    return (
        <section className='h-screen w-full flex items-center px-6 md:px-12'>
            <div className='max-w-[1800px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-4'>
                <div className='md:col-start-6 md:col-span-7 flex flex-col items-start'>
                    <h1 className='text-[16vw] md:text-[12vw] leading-[0.8] font-medium tracking-tighter mb-12 -ml-2'>
                        alkis k.
                    </h1>

                    <div className='max-w-lg'>
                        <h2 className='text-2xl md:text-3xl font-light mb-6 text-neutral-500'>
                            Frontend Developer
                        </h2>

                        <p className='text-lg leading-relaxed text-neutral-800 mb-12'>
                            I build modern Wordpress websites and React
                            <br />
                            applications with clean architecture, scalable
                            <br />
                            structure, and production-ready deployment.
                        </p>

                        {/* Tech Stack & Action */}
                        <div className='flex flex-col gap-8 max-w-sm'>
                            <div className='flex flex-wrap gap-2'>
                                {[
                                    'React',
                                    'JavaScript',
                                    'REST APIs',
                                    'WordPress',
                                    'Headless CMS',
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className='px-3 py-1 border border-neutral-200 rounded-full text-[10px] uppercase tracking-widest text-neutral-500'
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <Link
                                to='/projects'
                                className='group flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-bold border-b border-black pb-1 w-fit'
                            >
                                View Projects
                                <span className='group-hover:translate-x-1 transition-transform'>
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className='absolute bottom-10 right-12 text-[10px] uppercase tracking-[0.3em] rotate-90 origin-right opacity-30'>
                Scroll Down
            </div>
        </section>
    );
}
