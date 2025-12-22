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
		name: 'Dr. Ekaansh Sharma',
		title: 'Verified User',
		rating: 5,
		reviewTitle: 'Game changer for NEET-PG!',
		review: 'I used Neuroflip highly during my final week before exam. It really proved to be a life saver for me, since it helps focus on major topics instead of unnecessary detail.',
	},
	{
		name: 'Dr. Vidya Kumar',
		title: 'Verified User',
		rating: 5,
		reviewTitle: 'Gave confidence & Clarity',
		review: 'Topics like microbiology and biochemistry were intimidating, but Neuroflip’s bite-sized cards make them much easier to grasp. It’s a complete confidence booster!',
	},
	{
		name: 'Dr. Debarshi Mandal',
		title: 'Verified User',
		rating: 5,
		reviewTitle: 'The Time-Saver’s Choice',
		review: 'What makes Neuroflip stand out is how updated and comprehensive it is. The content is exam-focused &amp; easy to understand, which is perfect for people like who’re short on time.',
	},
	{
		name: 'Dr. Falak Ali',
		title: 'Verified User',
		rating: 5,
		reviewTitle: 'Helped me master efficiency',
		review: 'Neuroflip has made me a much more efficient learner. I can cover double topics in half the time with than the traditional study methods. It’s a shortcut to success without cutting corners.',
	},
];

export default function Testimonials() {
	const renderStars = (rating: number) => {
		return (
			<div className='flex gap-1'>
				{[...Array(5)].map((_, i) => (
					<svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11.1033 3.81663C11.4701 3.07346 12.5299 3.07346 12.8967 3.81663L14.8576 7.78909C15.0031 8.08394 15.2843 8.2884 15.6096 8.33595L19.9962 8.97712C20.8161 9.09696 21.1429 10.1048 20.5493 10.683L17.3768 13.773C17.1409 14.0027 17.0333 14.3339 17.0889 14.6584L17.8374 19.0226C17.9775 19.8396 17.12 20.4626 16.3864 20.0767L12.4655 18.0148C12.1741 17.8615 11.8259 17.8615 11.5345 18.0148L7.61363 20.0767C6.88 20.4626 6.02245 19.8396 6.16257 19.0226L6.91109 14.6584C6.96675 14.3339 6.85908 14.0027 6.62321 13.773L3.45068 10.683C2.85708 10.1048 3.18387 9.09696 4.00378 8.97712L8.39037 8.33595C8.71572 8.2884 8.99691 8.08394 9.14245 7.78909L11.1033 3.81663Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
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
							className='bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4 sm:p-6 text-white'>
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

							<h4 className='font-light text-white mb-3 !font-sans'>
								{testimonial.reviewTitle}
							</h4>

							<p className='text-purple-100 text-sm font-extralight leading-relaxed'>
								{testimonial.review}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
