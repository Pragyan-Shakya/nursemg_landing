import Image from 'next/image';

export default function Features() {
	return (
		<section className='bg-white py-16 px-6'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center mb-16 max-w-[50rem] mx-auto'>
					<h2 className='text-4xl md:text-5xl font-semibold text-gray-900 mb-6'>
						Your Revision for NEET-PG is incomplete without Neuroflip
					</h2>
					<p className='text-gray-600 text-lg max-w-3xl mx-auto'>
						Beat the Rush – Prep Early and Avoid Last-Minute Cramming with Neuroflip!
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
								Proven Technique for Revision
							</h4>
							<p className='text-gray-600 leading-relaxed text-sm'>
								Unlike Traditional methods, Neuroflip flashcards uses scientifically proven methods like active recall and spaced repetition boosting retention by over 50%
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
								Daily Capsules for Consistency
							</h4>
							<p className='text-gray-600 leading-relaxed text-sm'>
								Neuroflip ensures consistency with its daily capsule of High Yield Topics, handpicked and crafted by NEET-PG toppers.
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
								All contents under a single roof.
							</h4>
							<p className='text-gray-600 leading-relaxed text-sm'>
								Neuroflip offers all the must-know volatile topics for NEET-PG (includes BTR + More) in bite – sized, easy to digest flashcards all in one place.
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
								Study Anytime, Anywhere
							</h4>
							<p className='text-gray-600 leading-relaxed text-sm'>
								With Neuroflip, you can master a topic in just minutes. Revise an important topic even with 5 minutes to spare.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}