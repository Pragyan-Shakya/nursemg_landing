import Image from 'next/image';

export default function CTA() {
	return (
		<section className='bg-white py-30 px-6'>
			<div className='max-w-7xl mx-auto'>
				<div className='bg-[#FFD6C3] rounded-[2.5rem] pt-12 px-5 md:px-20'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						{/* Left Content */}
						<div className=''>
							<h2 className='text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight'>
								Pass NCLEX at your first attempt
							</h2>

							<p className='text-gray-600 text-sm mb-8 leading-relaxed'>
								Nursemg has 7000+ curated high yield
								flashcards covering every high yield topics.
								These cards are expertly designed to
								simplify complex topics, ensuring easy
								preparation.
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
								width={200}
								height={412}
								className='w-[270px] max-w-sm'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}