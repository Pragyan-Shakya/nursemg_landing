import Image from 'next/image';

export default function TrustedBy() {
	return (
		<section className='bg-purple-dark py-16 px-6 relative overflow-hidden'>
			<div className='absolute w-[150rem] h-[150rem] top-200 -left-10 md:top-100 md:left-0 md:w-full md:h-full '>
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
						Trusted by nursing
					</h2>
					<h3 className='text-4xl md:text-5xl font-bold text-white mb-6'>
						students everywhere
					</h3>
					<p className='text-purple-200 max-w-lg'>
						nursemg helps aspirants retain what they study so that
						they are more prepared than ever to crack Nclex exams.
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
							&ldquo; I struggled with traditional study methods
							until I discovered this app. The flashcards and
							spaced repetition techniques were game-changers for
							me. I passed the NCLEX on my first try! &rdquo;
						</p>
						<div className='flex items-center gap-3'>
							<div className='w-12 h-12 bg-gray-300 rounded-full overflow-hidden'>
								<Image
									src='/assets/student1.jpg'
									alt='Sarah M., RN'
									width={48}
									height={48}
									className='w-full h-full object-cover'
								/>
							</div>
							<div>
								<h4 className='font-semibold'>Sarah M., RN</h4>
								<p className='text-sm text-purple-200'>
									MBBS Student
								</p>
							</div>
						</div>
					</div>
					<div className='bg-[#796B83] rounded-2xl p-6 text-white'>
						<p className='text-sm leading-relaxed mb-6'>
							&ldquo; I struggled with traditional study methods
							until I discovered this app. The flashcards and
							spaced repetition techniques were game-changers for
							me. I passed the NCLEX on my first try! &rdquo;
						</p>
						<div className='flex items-center gap-3'>
							<div className='w-12 h-12 bg-gray-300 rounded-full overflow-hidden'>
								<Image
									src='/assets/student1.jpg'
									alt='Sarah M., RN'
									width={48}
									height={48}
									className='w-full h-full object-cover'
								/>
							</div>
							<div>
								<h4 className='font-semibold'>Sarah M., RN</h4>
								<p className='text-sm text-purple-200'>
									MBBS Student
								</p>
							</div>
						</div>
					</div>
					<div className='bg-[#796B83] rounded-2xl p-6 text-white'>
						<p className='text-sm leading-relaxed mb-6'>
							&ldquo; I struggled with traditional study methods
							until I discovered this app. The flashcards and
							spaced repetition techniques were game-changers for
							me. I passed the NCLEX on my first try! &rdquo;
						</p>
						<div className='flex items-center gap-3'>
							<div className='w-12 h-12 bg-gray-300 rounded-full overflow-hidden'>
								<Image
									src='/assets/student1.jpg'
									alt='Sarah M., RN'
									width={48}
									height={48}
									className='w-full h-full object-cover'
								/>
							</div>
							<div>
								<h4 className='font-semibold'>Sarah M., RN</h4>
								<p className='text-sm text-purple-200'>
									MBBS Student
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
