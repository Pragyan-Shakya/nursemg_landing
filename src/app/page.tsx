'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	// Handle keyboard events and body scroll
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && isSidebarOpen) {
				setIsSidebarOpen(false);
			}
		};

		const handleBodyScroll = () => {
			if (isSidebarOpen) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'unset';
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		handleBodyScroll();

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = 'unset';
		};
	}, [isSidebarOpen]);
	return (
		<div>
			<div className=' bg-purple-primary overflow-hidden'>
				<header className='bg-purple-primary'>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-4'>
						<div className='flex justify-between items-center'>
							<div className='flex items-center gap-2'>
								<Link href='/'>
									<Image
										src='/assets/logo.svg'
										alt='NCLEX Logo'
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
								aria-label='Toggle mobile menu'
							>
								<svg
									className='w-6 h-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
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
				<div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
					{/* Overlay */}
					<div 
						className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
							isSidebarOpen ? 'opacity-50' : 'opacity-0'
						}`}
						onClick={toggleSidebar}
						aria-hidden="true"
					/>
					
					{/* Sidebar */}
					<div 
						className={`fixed top-0 right-0 h-full w-64 bg-purple-primary shadow-2xl z-50 transform transition-all duration-300 ease-in-out ${
							isSidebarOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
						}`}
						role="dialog"
						aria-modal="true"
						aria-labelledby="mobile-menu-title"
					>
						<div className='p-6'>
							{/* Close Button */}
							<button
								onClick={toggleSidebar}
								className='absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors'
								aria-label='Close mobile menu'
							>
								<svg
									className='w-6 h-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>

							{/* Navigation Items */}
							<nav className={`mt-12 space-y-6 transition-all duration-500 delay-150 ${
								isSidebarOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
							}`} id="mobile-menu-title">
								<Link
									href='/blogs'
									className='block text-white hover:text-orange-300 transition-all duration-200 font-medium text-lg py-2 px-2 rounded hover:bg-white/10 hover:translate-x-1'
									onClick={toggleSidebar}
								>
									Blogs
								</Link>
								<a
									href='#faq'
									className='block text-white hover:text-orange-300 transition-all duration-200 font-medium text-lg py-2 px-2 rounded hover:bg-white/10 hover:translate-x-1'
									onClick={toggleSidebar}
								>
									FAQs
								</a>
								<button 
									className='w-full flex items-center justify-center gap-2 bg-transparent text-white px-6 py-3 rounded-full border border-white font-medium hover:bg-white hover:text-purple-primary hover:scale-105 transition-all duration-200 text-lg mt-8'
									onClick={toggleSidebar}
								>
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
								The #1 Flashcard App for NEET-PG/FMGE
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

						<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4'>
							Achieve{' '}
							<span className='bg-[#DE8459] text-white px-4 py-2 rounded-tl-[50px] rounded-br-[50px]'>
								<span className='italic'>NE</span>
								<span className='font-semibold italic'>ET</span>
								&nbsp;
								<span className='font-bold regular'>PG</span>
							</span>{' '}
							Success
						</h1>
						<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-5'>
							with Neuroflip flashcards
						</h2>

						<p className='text-purple-200 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto'>
							Neuroflip helps you retain what you study so that
							you are more prepared than ever to crack NEET-PG
							exams.
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

						<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center pointer-events-none z-0'>
							<span className='text-6xl md:text-8xl lg:text-[15rem] font-bold text-[#796B83] whitespace-nowrap'>
								NEET PG
							</span>
						</div>

						<div className='w-80 h-80 mx-auto flex items-center justify-center z-10 relative bottom-0'>
							<Image
								src='/assets/doctor.svg'
								alt='Doctor'
								width={320}
								height={320}></Image>
						</div>

						{/* Left Pattern */}
						<div className='absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden'>
							<div className='absolute -top-5 -left-5 md:-top-10 md:-left-10 lg:top-10 lg:-left-50'>
								<Image
									src='/assets/Patterns.svg'
									alt='Pattern'
									width={300}
									height={300}
									className='w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[50rem] lg:h-[700px]'
								/>
							</div>
						</div>

						{/* Right Pattern */}
						<div className='absolute top-0 right-0 w-full h-full pointer-events-none z-0 overflow-hidden'>
							<div className='absolute -top-5 -right-5 md:-top-10 md:-right-10 lg:top-5 lg:-right-50'>
								<Image
									src='/assets/Patterns-1.svg'
									alt='Pattern'
									width={300}
									height={300}
									className='w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[50rem] lg:h-[700px]'
								/>
							</div>
						</div>
					</div>
				</main>
			</div>

			<section className='bg-white py-16 px-6'>
				<div className='max-w-7xl mx-auto'>
					<div className='text-center mb-16 max-w-[50rem] mx-auto'>
						<h2 className='text-4xl md:text-5xl font-semibold text-gray-900 mb-6'>
							Your Revision for NEET-PG is incomplete without
							Neuroflip
						</h2>
						<p className='text-gray-600 text-lg max-w-3xl mx-auto'>
							Beat the Rush - Prep Early and Avoid Last-Minute
							Cramming with Neuroflip!
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8 lg:gap-12 items-start'>
						<div className='space-y-5'>
							<div className='border border-gray-200 rounded-2xl p-5 text-left'>
								<div className='mb-3'>
									<Image
										alt='crown'
										src='/assets/crown.svg'
										width={24}
										height={24}></Image>
								</div>
								<h4 className='text-xl font-bold text-gray-900 mb-3'>
									Proven Technique for Revision
								</h4>
								<p className='text-gray-600 leading-relaxed'>
									Unlike Traditional methods, Neuroflip
									flashcards uses scientifically proven
									methods like active recall and spaced
									repetition boosting retention by over 50%
								</p>
							</div>

							<div className='border border-gray-200 rounded-2xl p-5 text-left'>
								<div className='mb-3'>
									<Image
										alt='weight'
										src='/assets/weight.svg'
										width={24}
										height={24}></Image>
								</div>
								<h4 className='text-xl font-bold text-gray-900 mb-3'>
									Daily Capsules for Consistency
								</h4>
								<p className='text-gray-600 leading-relaxed'>
									Neuroflip ensures consistency with its daily
									capsule of High Yield Topics, handpicked and
									crafted by NEET-PG toppers.
								</p>
							</div>
						</div>

						<div className='flex justify-center'>
							<Image
								src='/assets/mobile-app.svg'
								alt='Phone'
								width={410}
								height={454}></Image>
						</div>

						<div className='space-y-5'>
							<div className='border border-gray-200 rounded-2xl p-5 text-left'>
								<div className='mb-3'>
									<Image
										alt='moon'
										src='/assets/moon.svg'
										width={24}
										height={24}></Image>
								</div>
								<h4 className='text-xl font-bold text-gray-900 mb-3'>
									All contents under a single roof.
								</h4>
								<p className='text-gray-600 leading-relaxed'>
									Neuroflip offers all the must-know volatile
									topics for NEET-PG (includes BTR + More) in
									bite - sized, easy to digest flashcards all
									in one place.
								</p>
							</div>

							<div className='border border-gray-200 rounded-2xl p-5 text-left'>
								<div className='mb-3'>
									<Image
										alt='security-safe'
										src='/assets/security-safe.svg'
										width={24}
										height={24}></Image>
								</div>
								<h4 className='text-xl font-bold text-gray-900 mb-3'>
									Study Anytime, Anywhere
								</h4>
								<p className='text-gray-600 leading-relaxed'>
									With Neuroflip, you can master a topic in
									just minutes. Revise an important topic even
									with 5 minutes to spare.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-purple-dark py-16 px-6 relative overflow-hidden'>
				<div className='absolute top-100 left-0 w-full h-full '>
					<Image
						alt='checkbox'
						src='/assets/checkbox.png'
						width={2000}
						height={2000}
						className=''></Image>
				</div>

				<div className='max-w-7xl mx-auto relative z-10'>
					<div className='mb-12'>
						<h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
							Trusted by NEET-PG
						</h2>
						<h3 className='text-4xl md:text-5xl font-bold text-white mb-6'>
							& FMGE students
						</h3>
						<p className='text-purple-200 text-lg max-w-lg'>
							Neuroflip helps aspirants retain what they study so
							that they are more prepared than ever to crack
							NEET-PG exams.
						</p>
					</div>

					<div className='absolute top-40 right-0 flex gap-4'>
						<button className='w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors'>
							<svg
								className='w-5 h-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M15 19l-7-7 7-7'
								/>
							</svg>
						</button>
						<button className='w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors'>
							<svg
								className='w-5 h-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M9 5l7 7-7 7'
								/>
							</svg>
						</button>
					</div>

					<div className='grid md:grid-cols-3 gap-6 lg:gap-8'>
						<div className='bg-[#796B83] rounded-2xl p-6 text-white'>
							<p className='text-sm leading-relaxed mb-6'>
								&ldquo;I struggled with traditional study
								methods until I discovered this app. The
								flashcards and spaced repetition techniques were
								game changers for me. I passed the NEET-PG on my
								first try!&rdquo;
							</p>
							<div className='flex items-center gap-3'>
								<div className='w-12 h-12 bg-gray-300 rounded-full overflow-hidden'>
									<Image
										src='/assets/student1.jpg'
										alt='Dr Ayan Agrawal'
										width={48}
										height={48}
										className='w-full h-full object-cover'
									/>
								</div>
								<div>
									<h4 className='font-semibold'>
										Dr Ayan Agrawal
									</h4>
									<p className='text-sm text-purple-200'>
										NEET PG Rank 134
									</p>
								</div>
							</div>
						</div>

						<div className='bg-[#796B83] rounded-2xl p-6 text-white'>
							<p className='text-sm leading-relaxed mb-6'>
								&ldquo;This app made studying for the NEET-PG so
								much easier. The focused review, materials and
								performance tracking helped me stay organized
								and confident. Highly recommend it to all
								nursing students!&rdquo;
							</p>
							<div className='flex items-center gap-3'>
								<div className='w-12 h-12 bg-gray-300 rounded-full overflow-hidden'>
									<Image
										src='/assets/student2.jpg'
										alt='Dr Partha Gupta'
										width={48}
										height={48}
										className='w-full h-full object-cover'
									/>
								</div>
								<div>
									<h4 className='font-semibold'>
										Dr Partha Gupta
									</h4>
									<p className='text-sm text-purple-200'>
										NEET PG Rank 120
									</p>
								</div>
							</div>
						</div>

						<div className='bg-[#796B83] rounded-2xl p-6 text-white'>
							<p className='text-sm leading-relaxed mb-6'>
								&ldquo;The flashcards were incredibly effective
								for my NEET-PG prep. I especially loved the
								spaced format that made it easy to study on the
								go, and the active recall really helped with
								retention. Great study tool overall!&rdquo;
							</p>
							<div className='flex items-center gap-3'>
								<div className='w-12 h-12 bg-gray-300 rounded-full overflow-hidden'>
									<Image
										src='/assets/student3.jpg'
										alt='Akhil Thambi'
										width={48}
										height={48}
										className='w-full h-full object-cover'
									/>
								</div>
								<div>
									<h4 className='font-semibold'>
										Akhil Thambi
									</h4>
									<p className='text-sm text-purple-200'>
										NEET - PG rank 235
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-white  py-20 px-10'>
				<div className='max-w-7xl mx-auto bg-gradient-to-b from-[#faded0]  to-orange-50 to-30% rounded-[2.5rem] p-20'>
					<div className=' grid lg:grid-cols-2 gap-12 mb-8'>
						<div>
							<h2 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
								Why choose
								<br />
								neuroflip flashcards
							</h2>
							<p className='text-gray-600 text-base mb-6 leading-relaxed'>
								Research consistently shows that flashcards
								significantly improve retention rates and
								learning outcomes.
							</p>
						</div>

						<div>
							<div className='pt-12'>
								<p className='text-gray-600 text-base leading-relaxed'>
									Utilizing spaced repetition and active
									recall, learners can optimize study sessions
									and master complex subjects efficiently.
									Spaced repetition, a concept from early
									20th- century educational psychology,
									enhances memory by revisiting information at
									strategic intervals.
								</p>
							</div>
						</div>
					</div>

					<div className='border-t-2 border-gray-400 mb-8'></div>

					<div className='flex justify-center mb-8'>
						<Image
							src='/assets/chart.svg'
							alt='Spaced Repetition Chart'
							width={700}
							height={400}
							className='w-full '
						/>
					</div>

					{/* Bottom - Two Feature Cards */}
					<div className='grid md:grid-cols-2 gap-20'>
						{/* Focused Study Card */}
						<div className='text-left'>
							<div className='mb-3'>
								<Image
									alt='crown'
									src='/assets/crown.svg'
									width={24}
									height={24}></Image>
							</div>
							<h4 className='text-lg font-semibold text-gray-900 mb-2'>
								Focused, High-Impact Study
							</h4>
							<p className='text-gray-600 text-sm leading-relaxed'>
								Our flashcards cover frequently tested topics,
								condensing vital information into bite-sized,
								easily digestible pieces.
							</p>
						</div>

						{/* Memory Retention Card */}
						<div className='text-left'>
							<div className='mb-3'>
								<Image
									alt='crown'
									src='/assets/crown.svg'
									width={24}
									height={24}></Image>
							</div>
							<h4 className='text-lg font-semibold text-gray-900 mb-2'>
								Boost Memory Retention
							</h4>
							<p className='text-gray-600 text-sm leading-relaxed'>
								Leverage the power of spaced repetition and
								active recall to enhance long- term memory
								retention.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-purple-primary py-30 px-6 relative overflow-hidden'>
				<div className='absolute top-0 right-0 w-full h-full pointer-events-none z-0 overflow-hidden'>
					<div className='absolute -top-5 -right-5 md:-top-10 md:-right-10 lg:top-10 lg:-right-50'>
						<Image
							src='/assets/Patterns-1.svg'
							alt='Pattern'
							width={300}
							height={300}
							className='w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[50rem] lg:h-[613px]'
						/>
					</div>
				</div>

				<div className='max-w-5xl mx-auto relative z-10'>
					<div className='text-left'>
						<h2 className='text-4xl md:text-5xl font-bold text-white mb-6 leading-tight'>
							Institutional
							<br />
							Collaboration
						</h2>

						<p className='text-purple-200 text-lg mb-8 leading-relaxed max-w-lg'>
							Partner with NeuroFlip to give your students the
							edge in NEET-PG preparation. We offer bulk pricing
							on our comprehensive flashcards solutions.
							Collaborate with us to create a solution that boosts
							student success and aligns with your institution`s
							academic goals.
						</p>

						<button className='inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors'>
							Learn more
							<svg
								className='w-4 h-4'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M9 5l7 7-7 7'
								/>
							</svg>
						</button>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='bg-white py-20 px-6'>
				<div className='max-w-7xl mx-auto'>
					<div className='bg-[#FFD6C3] rounded-[2.5rem] pt-12 px-12'>
						<div className='grid lg:grid-cols-2 gap-12 items-center'>
							{/* Left Content */}
							<div>
								<h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
									Improve your NEET-PG
									<br />
									Score – Guaranteed
								</h2>

								<p className='text-gray-600 text-lg mb-8 leading-relaxed'>
									With NeuroFlip, you can prepare effectively
									and avoid the stress of last-minute
									cramming. Our flashcards and daily capsules
									ensure you retain key concepts through
									consistent review, helping you stay
									organized and making your exam ready.
								</p>

								{/* App Store Buttons */}
								<div className='flex flex-col sm:flex-row gap-4'>
									<button className=' text-black px-8 py-3 border-1 border-black rounded-full font-semibold flex items-center gap-3 '>
										<svg
											className='w-8 h-8'
											viewBox='0 0 24 24'
											fill='currentColor'>
											<path d='M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z' />
										</svg>
										<div className='text-left'>
											<div className='text-xs'>
												GET IT ON
											</div>
											<div className=''>
												<Image
													src='/assets/google-play-text.svg'
													alt='Google Play'
													width={100}
													height={40}></Image>
											</div>
										</div>
									</button>

									<button className=' text-black px-8 py-3 border-1 border-black rounded-full font-semibold flex items-center gap-3 '>
										<svg
											className='w-8 h-8 '
											viewBox='0 0 24 24'
											fill='currentColor'>
											<path d='M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z' />
										</svg>
										<div className='text-left'>
											<div className='text-xs'>
												Download on the
											</div>
											<div className=''>
												<Image
													src='/assets/apple-store-text.svg'
													alt='Apple store'
													width={100}
													height={40}></Image>
											</div>
										</div>
									</button>
								</div>
							</div>

							{/* Right Content - Mobile App Image */}
							<div className='flex justify-center'>
								<Image
									src='/assets/app-image.svg'
									alt='Mobile App'
									width={285}
									height={412}
									className='w-full max-w-sm'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<Testimonials />

			{/* FAQ Section */}
			<FAQ />

			{/* Footer */}
			<Footer />
		</div>
	);
}
