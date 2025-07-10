import Image from 'next/image';

interface TestimonialItem {
	name: string;
	title: string;
	rating: number;
	review: string;
	reviewTitle: string;
}

const testimonialData: TestimonialItem[] = [
	{
		name: 'Sarah M., RN',
		title: 'Verified User',
		rating: 5,
		reviewTitle: 'Game-changer for me',
		review: 'The interactive lessons and realistic practice tests made studying enjoyable and effective.',
	},
	{
		name: 'Sarah M., RN',
		title: 'Verified User',
		rating: 5,
		reviewTitle: 'Game-changer for me',
		review: 'The interactive lessons and realistic practice tests made studying enjoyable and effective.',
	},
	{
		name: 'Sarah M., RN',
		title: 'Verified User',
		rating: 5,
		reviewTitle: 'Game-changer for me',
		review: 'The interactive lessons and realistic practice tests made studying enjoyable and effective.',
	},
	{
		name: 'Sarah M., RN',
		title: 'Verified User',
		rating: 5,
		reviewTitle: 'Game-changer for me',
		review: 'The interactive lessons and realistic practice tests made studying enjoyable and effective.',
	},
];

export default function Testimonials() {
	const renderStars = (rating: number) => {
		return (
			<div className='flex gap-1'>
				{[...Array(5)].map((_, i) => (
					<svg
						key={i}
						className={`w-4 h-4 ${
							i < rating
								? 'text-yellow-400 fill-current'
								: 'text-gray-300'
						}`}
						viewBox='0 0 24 24'>
						<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
					</svg>
				))}
			</div>
		);
	};

	return (
		<section className='bg-purple-dark py-16 sm:py-20 lg:py-30 px-4 sm:px-6'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
					{testimonialData.map((testimonial, index) => (
						<div
							key={index}
							className='bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-white'>
							<div className='flex items-center justify-between mb-4'>
								<div className='flex items-center gap-2'>
									<span className='font-medium text-sm'>
										{testimonial.name}
									</span>
									<Image
										src='/assets/verified.svg'
										alt='Verified'
										width={16}
										height={16}
										className='flex-shrink-0'
									/>
								</div>
							</div>

							<div className='mb-4'>
								{renderStars(testimonial.rating)}
							</div>

							<h4 className='font-semibold text-white mb-3'>
								{testimonial.reviewTitle}
							</h4>

							<p className='text-purple-100 text-sm leading-relaxed'>
								{testimonial.review}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
