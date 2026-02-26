export default function Contact() {
    return (
        <section className='h-screen w-full px-6 md:px-12 flex items-center bg-neutral-950 text-[#F8F6F2]'>
            <div className='max-w-[1800px] mx-auto w-full flex flex-col'>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>
                    <div className='md:col-span-2'>
                        <h2 className='text-xs uppercase tracking-[0.5em] text-neutral-500'>
                            Contact
                        </h2>
                    </div>

                    <div className='md:col-span-10'>
                        <p className='text-3xl md:text-5xl font-bold tracking-tighter leading-[1.1] max-w-4xl'>
                            I'm currently open to frontend development
                            opportunities and collaborations.
                        </p>
                    </div>
                </div>

                <div className='mt-24'>
                    <a
                        href='mailto:webdev@alkis.me'
                        className='block text-center text-[20vw] md:text-[12vw] font-medium tracking-[-0.04em] leading-none transition-all duration-900 ease-out hover:scale-[1.02] hover:text-neutral-200'
                    >
                        get in touch
                    </a>
                    <div className='mt-30 grid grid-cols-1 md:grid-cols-12'>
                        <div className='md:col-start-7 md:col-span-6 flex flex-col items-start gap-2 text-[16px] uppercase tracking-widest text-neutral-400'>
                            <a
                                href='https://linkedin.com/in/alkis-karagiannis/'
                                target='_blank'
                                className='hover:text-white transition-colors'
                            >
                                LinkedIn ↗
                            </a>

                            <a
                                href='https://github.com/1nv1nc1bl3'
                                target='_blank'
                                className='hover:text-white transition-colors'
                            >
                                GitHub ↗
                            </a>

                            <div className='mt-10'>
                                Based in Greece / Available Worldwide
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
