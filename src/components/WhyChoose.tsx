import Image from 'next/image';

export default function WhyChoose() {
	return (
		<section className='bg-white  py-20 px-10'>
			<div className='max-w-7xl mx-auto bg-gradient-to-b from-[#faded0]  to-orange-50 to-30% rounded-[2.5rem] p-5 md:p-20'>
				<div className=' grid lg:grid-cols-2 gap-12 mb-8'>
					<div>
						<h2 className='text-4xl md:text-5xl font-semibold text-gray-900 leading-tight'>
							Why choose
							<br />
							nursemg flashcards
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
								20th-century educational psychology,
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
	);
}