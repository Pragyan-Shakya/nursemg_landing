'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';


export default function Hero() {
	return (
		<div className=' bg-purple-primary overflow-hidden'>
			<Header/>

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
						<Link
							href='https://play.google.com/store/apps/details?id=com.neuroflip.nclex100'
							target='_blank'
							rel='noopener noreferrer'
							className='bg-white text-black px-6 sm:px-10 py-2 rounded-full font-semibold flex items-center gap-3 justify-center'>
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
						</Link>
						<Link href='https://apps.apple.com/us/app/nclex-flashcards/id1592043274' target='_blank' rel='noopener noreferrer' className='bg-white text-black px-6 sm:px-10 py-2 rounded-full font-semibold flex items-center gap-3 justify-center'>
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
						</Link>
					</div>

					<div className='w-60 h-60 md:w-100 md:h-100 mx-auto flex items-center justify-center z-10 relative bottom-0'>
						<Image
							src='/assets/female-doctor.png'
							alt='Doctor'
							width={350}
							height={450}></Image>
					</div>

					{/* Left Pattern */}
					<div className='absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden'>
						<div className='absolute top-60 -left-70 md:top-50 md:-left-5 lg:top-10 lg:-left-30'>
							<Image
								src='/assets/Patterns.svg'
								alt='Pattern'
								width={300}
								height={500}
								className='w-[400px] h-[600px] md:w-[300px] md:h-[1000px] lg:w-[50rem] lg:h-[1000px]'
							/>
						</div>
					</div>

					{/* Right Pattern */}
					<div className='absolute top-0 right-0 w-full h-full pointer-events-none z-0 overflow-hidden'>
						<div className='absolute top-60 -right-70 md:top-50 md:-right-5 lg:top-10 lg:-right-30'>
							<Image
								src='/assets/Patterns-1.svg'
								alt='Pattern'
								width={300}
								height={500}
								className='w-[400px] h-[600px] md:w-[300px] md:h-[1000px] lg:w-[50rem] lg:h-[1000px]'
							/>
						</div>
					</div>

					<div className='absolute bottom-0 md:-bottom-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center pointer-events-none z-0'>
						<span className='text-[6rem] md:text-[10rem] lg:text-[22rem] font-bold text-[#796B83] whitespace-nowrap'>
							NCLEX
						</span>
					</div>
				</div>
			</main>
		</div>
	);
}
