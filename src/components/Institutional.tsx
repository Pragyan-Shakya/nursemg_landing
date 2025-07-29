import Image from 'next/image';

export default function Institutional() {
	return (
		<section className='bg-purple-primary py-30 px-6 relative overflow-hidden'>
			<div className='absolute top-0 right-0 w-full h-full pointer-events-none z-0 overflow-hidden'>
				<div className='absolute top-10 -right-80 md:-top-10 md:-right-10 lg:top-10 lg:-right-50'>
					<Image
						src='/assets/Patterns-1.svg'
						alt='Pattern'
						width={300}
						height={300}
						className='w-[400px] h-[650px] md:w-[250px] md:h-[250px] lg:w-[50rem] lg:h-[550px]'
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
						We partner with academic programs to offer bulk pricing
						on our suite of nursing exam prep solutions. Collaborate
						with us to customize a package that fits your
						students&apos; needs and aligns with your institution&apos;s
						goals.
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
	);
}