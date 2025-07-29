'use client';

import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
	isSidebarOpen: boolean;
	toggleSidebar: () => void;
}

export default function Hero({ isSidebarOpen, toggleSidebar }: HeroProps) {
	return (
		<div className=' bg-purple-primary overflow-hidden'>
			<header className='bg-purple-primary'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-4'>
					<div className='flex justify-between items-center'>
						<div className='flex items-center gap-2'>
							<Link href='/'>
								<Image
									src='/assets/logo_white.png'
									alt='nursemg Logo'
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
							<a
								href='#faq'
								className='text-white hover:text-orange-300 transition-colors font-medium text-sm sm:text-[15px]'>
								FAQs
							</a>
							<button className='flex items-center gap-2 bg-transparent text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white font-medium hover:bg-white hover:text-gray-900 transition-colors text-sm sm:text-[15px]'>
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
							</button>
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
							<button
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
							</button>
						</nav>
					</div>
				</div>
			</div>

			<main className='relative text-center px-4 sm:px-6 py-8 sm:py-10'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='inline-flex items-center gap-2 border-1 border-[#F3BA58] text-[#F3BA58] px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8'>
						<span className='text-yellow-300'>
							<Image
								title='Star'
								src='/assets/star.svg'
								alt='Star'
								width={15}
								height={15}></Image>
						</span>
						<span className='text-xs sm:text-sm font-medium'>
							The #1 App for US NCLEX
						</span>
						<span className='text-yellow-300'>
							<Image
								title='Star'
								src='/assets/star.svg'
								alt='Star'
								width={15}
								height={15}></Image>
						</span>
					</div>

					<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white mb-4 font-semibold'>
						Achieve{' '}
						<span className='bg-[#DE8459] text-white px-4 py-2 rounded-tl-[50px] rounded-br-[50px]'>
							<span className='font-extralight italic'>s</span>
							<span className='font-semibold '>uccess</span>
						</span>{' '}
						with
					</h1>
					<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white mb-5 font-semibold'>
						NCLEX flashcards
					</h2>

					<p className='text-purple-200 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto'>
						Nursemg helps aspirants retain what they study so that
						they are more prepared than ever to crack NCLEX exams.
					</p>

					{/* App Store Buttons */}
					<div className='flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16'>
						<button className='bg-white text-black px-6 sm:px-10 py-2 rounded-full font-semibold flex items-center gap-3 justify-center'>
							<svg
								className='w-10 h-10'
								viewBox='0 0 24 24'
								fill='currentColor'>
								<path d='M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z' />
							</svg>
							<div className='text-left'>
								<div className='text-xs font-normal'>
									GET IT ON
								</div>
								<div className=''>
									<Image
										src='/assets/google-play-text.svg'
										alt='Google Play'
										width={120}
										height={40}></Image>
								</div>
							</div>
						</button>
						<button className='bg-white text-black px-6 sm:px-10 py-2 rounded-full font-semibold flex items-center gap-3 justify-center'>
							<svg
								className='w-10 h-10'
								viewBox='0 0 24 24'
								fill='currentColor'>
								<path d='M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z' />
							</svg>
							<div className='text-left'>
								<div className='text-xs font-normal'>
									Download on the
								</div>
								<div className=''>
									<Image
										src='/assets/apple-store-text.svg'
										alt='Apple store'
										width={120}
										height={40}></Image>
								</div>
							</div>
						</button>
					</div>

					<div className='w-60 h-60 md:w-80 md:h-80 mx-auto flex items-center justify-center z-10 relative bottom-0'>
						<Image
							src='/assets/doctor.svg'
							alt='Doctor'
							width={320}
							height={320}></Image>
					</div>

					{/* Left Pattern */}
					<div className='absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden'>
						<div className='absolute top-60 -left-70 md:-top-10 md:-left-10 lg:top-10 lg:-left-50'>
							<Image
								src='/assets/Patterns.svg'
								alt='Pattern'
								width={300}
								height={300}
								className='w-[400px] h-[600px] md:w-[250px] md:h-[250px] lg:w-[50rem] lg:h-[800px]'
							/>
						</div>
					</div>

					{/* Right Pattern */}
					<div className='absolute top-0 right-0 w-full h-full pointer-events-none z-0 overflow-hidden'>
						<div className='absolute top-60 -right-70 md:-top-10 md:-right-10 lg:top-5 lg:-right-50'>
							<Image
								src='/assets/Patterns-1.svg'
								alt='Pattern'
								width={300}
								height={300}
								className='w-[400px] h-[600px] md:w-[250px] md:h-[250px] lg:w-[50rem] lg:h-[800px]'
							/>
						</div>
					</div>

					<div className='absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center pointer-events-none z-0'>
						<span className='text-[6rem] md:text-8xl lg:text-[19rem] font-bold text-[#796B83] whitespace-nowrap'>
							NCLEX
						</span>
					</div>
				</div>
			</main>
		</div>
	);
}
