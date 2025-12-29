'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			// Get viewport height
			const viewportHeight = window.innerHeight;
			// Check if scrolled past 100vh
			if (window.scrollY > viewportHeight) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		// Add scroll event listener
		window.addEventListener('scroll', handleScroll);

		// Cleanup
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
    return (
        <>
            <header className={`${isSticky ? 'sticky top-0 z-50' : ''} bg-purple-primary transition-all duration-300`}>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-4'>
					<div className='flex justify-between items-center'>
						<div className='flex items-center gap-2'>
							<Link href='/'>
								<Image
									src='/assets/logo.svg'
									alt='Neuroflip Logo'
									width={106}
									height={24}
									className='cursor-pointer'
								/>
							</Link>
						</div>

						{/* Desktop Navigation */}
						<nav className='hidden md:flex items-center gap-4 sm:gap-8'>
							<Link
								href='/blogs'
								className='text-white hover:text-orange-300 transition-colors font-medium text-sm sm:text-[15px]'>
								Blogs
							</Link>
							<Link
								href='/#faq'
								className='text-white hover:text-orange-300 transition-colors font-medium text-sm sm:text-[15px]'>
								FAQs
							</Link>
							<Link href="https://onelink.to/mj2p8q" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 bg-transparent text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white font-medium hover:bg-white hover:text-gray-900 transition-colors text-sm sm:text-[15px]'>
								Get started
								<svg
									className='w-4 h-4'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={1.33}
										d='M9 5l7 7-7 7'
									/>
								</svg>
							</Link>
						</nav>

						{/* Mobile Menu Button */}
						<button
							onClick={toggleSidebar}
							className='md:hidden text-white p-2'
							aria-label='Toggle mobile menu'>
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						</button>
					</div>
				</div>

				<Image
					title='Hero Image'
					src='/assets/border.svg'
					alt='Hero Image'
					width={1920}
					height={1080}
				/>
			</header>

			{/* Mobile Sidebar */}
			<div
				className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
					isSidebarOpen
						? 'visible opacity-100'
						: 'invisible opacity-0'
				}`}>
				{/* Overlay */}
				<div
					className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
						isSidebarOpen ? 'opacity-50' : 'opacity-0'
					}`}
					onClick={toggleSidebar}
					aria-hidden='true'
				/>

				{/* Sidebar */}
				<div
					className={`fixed top-0 right-0 h-full w-64 bg-purple-primary shadow-2xl z-50 transform transition-all duration-300 ease-in-out ${
						isSidebarOpen
							? 'translate-x-0 opacity-100'
							: 'translate-x-full opacity-0'
					}`}
					role='dialog'
					aria-modal='true'
					aria-labelledby='mobile-menu-title'>
					<div className='p-6'>
						{/* Close Button */}
						<button
							onClick={toggleSidebar}
							className='absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors'
							aria-label='Close mobile menu'>
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</button>

						{/* Navigation Items */}
						<nav
							className={`mt-12 space-y-6 transition-all duration-500 delay-150 ${
								isSidebarOpen
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-4'
							}`}
							id='mobile-menu-title'>
							<Link
								href='/blogs'
								className='block text-white hover:text-orange-300 transition-all duration-200 font-medium text-lg py-2 px-2 rounded hover:bg-white/10 hover:translate-x-1'
								onClick={toggleSidebar}>
								Blogs
							</Link>
							<a
								href='#faq'
								className='block text-white hover:text-orange-300 transition-all duration-200 font-medium text-lg py-2 px-2 rounded hover:bg-white/10 hover:translate-x-1'
								onClick={toggleSidebar}>
								FAQs
							</a>
							<Link href="https://onelink.to/mj2p8q" target="_blank" rel="noopener noreferrer"
								className='w-full flex items-center justify-center gap-2 bg-transparent text-white px-6 py-3 rounded-full border border-white font-medium hover:bg-white hover:text-purple-primary hover:scale-105 transition-all duration-200 text-lg mt-8'
								onClick={toggleSidebar}>
								Get started
								<svg
									className='w-4 h-4 transition-transform duration-200'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={1.33}
										d='M9 5l7 7-7 7'
									/>
								</svg>
							</Link>
						</nav>
					</div>
				</div>
			</div>
        </>
    );
}