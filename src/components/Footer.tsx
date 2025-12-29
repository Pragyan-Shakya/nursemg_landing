import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<section className='bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6'>
			<div className='max-w-7xl mx-auto'>
				<footer className='bg-purple-dark rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden'>
					<div className='py-12 sm:py-16 px-6 sm:px-12 text-center'>
						<h2 className='text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6 sm:mb-8'>
							Helped Improve scores of 25,000 aspirants already.
						</h2>

						<div className='flex flex-col sm:flex-row gap-4 justify-center mb-6'>
							<Link href='https://play.google.com/store/apps/details?id=com.neuroflip.neetpg' target='_blank' rel='noopener noreferrer' className='bg-white text-black px-6 sm:px-10 py-2 rounded-full font-semibold flex items-center gap-3 justify-center'>
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
							</Link>

							<Link href='https://apps.apple.com/us/app/neuroflip-neet-pg-flashcards/id6474674721' target='_blank' rel='noopener noreferrer' className='bg-white text-black px-6 sm:px-10 py-2 rounded-full font-semibold flex items-center gap-3 justify-center'>
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
							</Link>
						</div>

						<p className='text-purple-200 text-base sm:text-lg'>
							Don&apos;t be left behind
						</p>
					</div>

					<div className='bg-purple-primary pt-12  sm:pt-16 px-6 sm:px-12 rounded-t-4xl'>
						{/* Mobile: Quick Links and Contact Us side by side */}
						<div className='grid grid-cols-2 sm:hidden gap-6 mb-8 p-'>
							<div>
								<h3 className='text-lg font-semibold text-white mb-4'>
									QUICK LINKS
								</h3>
								<ul className='space-y-2'>
									<li>
										<Link 
											href='/blogs'
											className='text-purple-200 hover:text-white transition-colors text-sm'>
											Blogs
										</Link>
									</li>
									<li>
										<Link
											href='/privacy-policy'
											className='text-purple-200 hover:text-white transition-colors text-sm'>
											Privacy Policy
										</Link>
									</li>
									<li>
										<Link
											href='/terms-of-use'
											className='text-purple-200 hover:text-white transition-colors text-sm'>
											Terms of use
										</Link>
									</li>
									
								</ul>

								<p className='text-purple-200 text-sm mt-4'>© {currentYear} Neuroflip eductech pvt ltd​</p>
							</div>

							<div className='mx-auto'>
								<h3 className='text-lg font-semibold text-white mb-4'>
									CONTACT US
								</h3>
								<p className='text-purple-200 mb-6 text-sm'>									
									Refund Policy
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
						<div className='sm:hidden flex justify-center'>
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
										<Link
											href='/blogs'
											className='text-purple-200 hover:text-white transition-colors text-sm sm:text-base'>
											Blogs
										</Link>
									</li>
									<li>
										<Link
											href='/privacy-policy'
											className='text-purple-200 hover:text-white transition-colors text-sm sm:text-base'>
											Privacy Policy
										</Link>
									</li>
									<li>
										<Link
											href='/terms-of-use'
											className='text-purple-200 hover:text-white transition-colors text-sm sm:text-base'>
											Terms of use
										</Link>
									</li>
								</ul>
								<p className='text-purple-200 text-sm mt-4'>© {currentYear} Neuroflip eductech pvt ltd​</p>
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

							<div className='lg:mx-auto pb-4'>
								<h3 className='text-lg sm:text-xl font-semibold text-white '>
									CONTACT US
								</h3>
								<p className='text-purple-200 mb-8'>
									<Link href='mailto:info@neuroflip.com'>info@neuroflip.com</Link>
								</p>

								<h3 className='text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6'>
									FOLLOW US
								</h3>
								<div className='flex gap-4'>
									<Link href="https://www.facebook.com/neuroflip/" target="_blank" rel="noopener noreferrer" className='text-purple-200 hover:text-white transition-colors'>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"></path></svg>
									</Link>
									<Link
										href='https://x.com/Neuroflipmed' target='_blank'
										className='text-purple-200 hover:text-white transition-colors'>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
									</Link>
									<Link
										href='https://www.instagram.com/neuroflip.app/' target='_blank'
										className='text-purple-200 hover:text-white transition-colors'>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
									</Link>
									
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</section>
	);
}
