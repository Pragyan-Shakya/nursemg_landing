import Image from 'next/image';

export default function Footer() {
	return (
		<section className='bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6'>
			<div className='max-w-7xl mx-auto'>
				<footer className='bg-purple-dark rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden'>
					<div className='py-12 sm:py-16 px-6 sm:px-12 text-center'>
						<h2 className='text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6 sm:mb-8'>
							Helped Improve scores of 25,000 aspirants already.
						</h2>

						<div className='flex flex-col sm:flex-row gap-4 justify-center mb-6'>
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
									<div>
										<Image
											src='/assets/google-play-text.svg'
											alt='Google Play'
											width={120}
											height={40}
										/>
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
									<div>
										<Image
											src='/assets/apple-store-text.svg'
											alt='Apple Store'
											width={120}
											height={40}
										/>
									</div>
								</div>
							</button>
						</div>

						<p className='text-purple-200 text-base sm:text-lg'>
							Don&apos;t be left behind
						</p>
					</div>

					<div className='bg-purple-primary pt-12 sm:pt-16 px-6 sm:px-12 rounded-t-4xl'>
						{/* Mobile: Quick Links and Contact Us side by side */}
						<div className='grid grid-cols-2 sm:hidden gap-6 mb-8 p-'>
							<div>
								<h3 className='text-lg font-semibold text-white mb-4'>
									QUICK LINKS
								</h3>
								<ul className='space-y-2'>
									<li>
										<a
											href='#'
											className='text-purple-200 hover:text-white transition-colors text-sm'>
											Learn
										</a>
									</li>
									<li>
										<a
											href='#'
											className='text-purple-200 hover:text-white transition-colors text-sm'>
											Support
										</a>
									</li>
									<li>
										<a
											href='#'
											className='text-purple-200 hover:text-white transition-colors text-sm'>
											Security
										</a>
									</li>
									<li>
										<a
											href='#'
											className='text-purple-200 hover:text-white transition-colors text-sm'>
											Legal & disclosures
										</a>
									</li>
								</ul>
							</div>

							<div>
								<h3 className='text-lg font-semibold text-white mb-4'>
									CONTACT US
								</h3>
								<p className='text-purple-200 mb-6 text-sm'>
									Contact@nclex.com
								</p>

								<h3 className='text-lg font-semibold text-white mb-4'>
									FOLLOW US
								</h3>
								<div className='flex gap-4'>
									<a
										href='#'
										className='text-purple-200 hover:text-white transition-colors'>
										<svg
											className='w-6 h-6'
											fill='currentColor'
											viewBox='0 0 24 24'>
											<path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
										</svg>
									</a>
									<a
										href='#'
										className='text-purple-200 hover:text-white transition-colors'>
										<svg
											className='w-6 h-6'
											fill='currentColor'
											viewBox='0 0 24 24'>
											<path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
										</svg>
									</a>
									<a
										href='#'
										className='text-purple-200 hover:text-white transition-colors'>
										<svg
											className='w-6 h-6'
											fill='currentColor'
											viewBox='0 0 24 24'>
											<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
										</svg>
									</a>
								</div>
							</div>
						</div>

						{/* Mobile: Phone image */}
						<div className='sm:hidden flex justify-center mb-8'>
							<Image
								src='/assets/hand-phone.svg'
								alt='Mobile App'
								width={300}
								height={400}
								className='w-full max-w-xs'
							/>
						</div>

						{/* Desktop and tablet layout (unchanged) */}
						<div className='hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 items-start'>
							<div>
								<h3 className='text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6'>
									QUICK LINKS
								</h3>
								<ul className='space-y-2 sm:space-y-3'>
									<li>
										<a
											href='#'
											className='text-purple-200 hover:text-white transition-colors text-sm sm:text-base'>
											Learn
										</a>
									</li>
									<li>
										<a
											href='#'
											className='text-purple-200 hover:text-white transition-colors text-sm sm:text-base'>
											Support
										</a>
									</li>
									<li>
										<a
											href='#'
											className='text-purple-200 hover:text-white transition-colors text-sm sm:text-base'>
											Security
										</a>
									</li>
									<li>
										<a
											href='#'
											className='text-purple-200 hover:text-white transition-colors text-sm sm:text-base'>
											Legal & disclosures
										</a>
									</li>
								</ul>
							</div>

							<div className='flex justify-center'>
								<Image
									src='/assets/hand-phone.svg'
									alt='Mobile App'
									width={300}
									height={400}
									className='w-full max-w-xs'
								/>
							</div>

							<div>
								<h3 className='text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6'>
									CONTACT US
								</h3>
								<p className='text-purple-200 mb-8'>
									Contact@nclex.com
								</p>

								<h3 className='text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6'>
									FOLLOW US
								</h3>
								<div className='flex gap-4'>
									<a
										href='#'
										className='text-purple-200 hover:text-white transition-colors'>
										<svg
											className='w-6 h-6'
											fill='currentColor'
											viewBox='0 0 24 24'>
											<path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
										</svg>
									</a>
									<a
										href='#'
										className='text-purple-200 hover:text-white transition-colors'>
										<svg
											className='w-6 h-6'
											fill='currentColor'
											viewBox='0 0 24 24'>
											<path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
										</svg>
									</a>
									<a
										href='#'
										className='text-purple-200 hover:text-white transition-colors'>
										<svg
											className='w-6 h-6'
											fill='currentColor'
											viewBox='0 0 24 24'>
											<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</section>
	);
}
