import Image from 'next/image';

export default function Features() {
	return (
		<section className='bg-white py-16 px-6'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center mb-16 max-w-[50rem] mx-auto'>
					<h2 className='text-4xl md:text-5xl font-semibold text-gray-900 mb-6'>
						Achieve NCLEX success with NurseMG!
					</h2>
					<p className='text-gray-600 text-lg max-w-3xl mx-auto'>
						nursemg helps aspirants retain what they study so
						that they are more prepared than ever to crack Nclex
						exams.
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
							<h4 className='text-xl font-semibold text-gray-900 mb-3'>
								Result-based learning
							</h4>
							<p className='text-gray-600 leading-relaxed text-sm'>
								By leveraging the principles of spaced
								repetition and active recall, learners can
								achieve mastery over complex subjects with
								greater efficiency
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
							<h4 className='text-xl font-semibold text-gray-900 mb-3'>
								High yield content
							</h4>
							<p className='text-gray-600 leading-relaxed text-sm'>
								Master key exam topics that are frequently
								tested, condensed into easy-to-digest,
								bite-sized flashcards for effective
								learning.
							</p>
						</div>
					</div>

					<div className='flex justify-center'>
						<Image
							src='/assets/mobile-app.svg'
							alt='Phone'
							width={400}
							height={420}></Image>
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
							<h4 className='text-xl font-semibold text-gray-900 mb-3'>
								Performance analysis
							</h4>
							<p className='text-gray-600 leading-relaxed text-sm'>
								Track your progress and performance
								effortlessly with our app's built-in
								analytics, ensuring you stay on top of your
								study goals and excel in the NCLEX exam.
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
							<h4 className='text-xl font-semibold text-gray-900 mb-3'>
								High yield content
							</h4>
							<p className='text-gray-600 leading-relaxed text-sm'>
								Master key exam topics that are frequently
								tested, condensed into easy-to-digest,
								bite-sized flashcards for effective
								learning.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}