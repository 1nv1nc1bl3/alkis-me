export default function Contact() {
    return (
        <section className='min-h-screen w-full px-6 md:px-12 flex flex-col justify-between py-24 bg-[#111] text-white'>
            <div className='max-w-[1800px] mx-auto w-full flex-grow flex flex-col justify-center'>
                <span className='text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-8 block'>
                    Contact
                </span>

                <p className='text-xl md:text-2xl font-light text-neutral-400 max-w-2xl mb-12'>
                    I'm currently open to frontend development opportunities and
                    collaborations.
                </p>

                {/* Διόρθωση μεγέθους: Από 10vw σε 7vw και προσθήκη break-all */}
                <a
                    href='mailto:webdev@alkis.me'
                    className='text-[8vw] md:text-[7vw] font-bold tracking-tighter leading-none uppercase break-all hover:text-neutral-400 transition-colors'
                >
                    webdev <br className='md:hidden' /> @alkis.me
                </a>
            </div>

            {/* Social Links στο κάτω μέρος του Contact */}
            <div className='max-w-[1800px] mx-auto w-full flex justify-between items-end border-t border-neutral-800 pt-12 mt-12'>
                <div className='flex gap-12'>
                    <a
                        href='https://linkedin.com/in/alkis-karagiannis/'
                        target='_blank'
                        className='text-xs uppercase tracking-widest font-bold hover:line-through'
                    >
                        LinkedIn
                    </a>
                    <a
                        href='https://github.com/1nv1nc1bl3'
                        target='_blank'
                        className='text-xs uppercase tracking-widest font-bold hover:line-through'
                    >
                        GitHub
                    </a>
                </div>
                <div className='text-[10px] uppercase tracking-widest text-neutral-600 hidden md:block'>
                    Based in Greece / Available Worldwide
                </div>
            </div>
        </section>
    );
}
