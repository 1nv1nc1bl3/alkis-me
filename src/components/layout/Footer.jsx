export default function Footer() {
    return (
        <footer className='bg-[#F8F6F2] text-neutral-900 px-6 md:px-12 py-16'>
            <div className='max-w-[1800px] mx-auto w-full flex justify-between items-center'>
                <p className='text-xs uppercase tracking-widest text-neutral-500'>
                    © 2026 Alkis — Portfolio crafted with React & Tailwind
                </p>

                <a
                    href='#top'
                    className='text-xs uppercase tracking-[0.3em] font-medium border-b border-neutral-900 pb-1 hover:opacity-60 transition-opacity'
                >
                    Back to Top ↑
                </a>
            </div>
        </footer>
    );
}
