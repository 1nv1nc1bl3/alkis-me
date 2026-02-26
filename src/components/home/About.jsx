export default function About() {
    return (
        <section className='h-screen w-full px-6 md:px-12 flex items-center bg-white border-b border-neutral-100'>
            <div className='max-w-[1800px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12'>
                {/* Header - Vertical on Desktop */}
                <div className='md:col-span-2'>
                    <h2 className='text-xs uppercase tracking-[0.5em] text-neutral-400 sticky top-32'>
                        About
                    </h2>
                </div>

                {/* Main Content */}
                <div className='md:col-span-10 flex flex-col gap-16'>
                    <p className='text-3xl md:text-5xl font-bold tracking-tighter leading-[1.1] max-w-4xl'>
                        I'm a Frontend Developer specializing in building modern
                        Wordpress sites and web applications with{' '}
                        <span className='text-neutral-400 font-light'>
                            React
                        </span>
                        , REST APIs, and scalable component architecture.
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                        <p className='text-lg text-neutral-600 leading-relaxed'>
                            My experience includes developing interactive
                            applications, integrating external APIs, and
                            deploying projects in real-world environments. I'm
                            continuously improving my skills toward building
                            high-quality, performant web applications.
                        </p>

                        <div className='flex flex-col gap-4'>
                            <h4 className='text-[10px] uppercase tracking-widest font-bold text-neutral-900'>
                                Core Technologies
                            </h4>
                            <p className='text-sm text-neutral-500 leading-loose uppercase tracking-wider'>
                                React • JavaScript • REST APIs • WordPress •
                                Modern Frontend Tooling
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
