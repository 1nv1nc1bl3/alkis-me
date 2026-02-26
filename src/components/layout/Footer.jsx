export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className='w-full px-6 py-12 md:px-12 border-t border-neutral-100 bg-white'>
            <div className='max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6'>
                <p className='text-[10px] uppercase tracking-[0.2em] text-neutral-400'>
                    © {year} Alkis — Portfolio crafted with React & Tailwind
                </p>

                <div className='flex gap-8'>
                    <a
                        href='https://github.com/1nv1nc1bl3'
                        target='_blank'
                        className='text-[10px] uppercase tracking-widest font-bold hover:opacity-50 transition-opacity'
                    >
                        GitHub
                    </a>
                    <a
                        href='https://www.linkedin.com/in/alkis-karagiannis/'
                        target='_blank'
                        className='text-[10px] uppercase tracking-widest font-bold hover:opacity-50 transition-opacity'
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
