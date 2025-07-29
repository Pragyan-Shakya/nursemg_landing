'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface FAQItem {
	id: number;
	title: string;
	answer: string;
	status: number;
	created_at: string;
	updated_at: string;
}


export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const [faqData, setFaqData] = useState<FAQItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchFAQs = async () => {
			try {
				const response = await fetch('https://011403120524.neetcrack.com/api/faqs');
				if (!response.ok) {
					throw new Error('Failed to fetch FAQs');
				}
				const result = await response.json();
				if (result.success) {
					setFaqData(result.data);
				} else {
					throw new Error('API returned unsuccessful response');
				}
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Failed to fetch FAQs');
			} finally {
				setLoading(false);
			}
		};

		fetchFAQs();
	}, []);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section id='faq' className='bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-12 sm:mb-16'>
					<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
						Frequently Asked Questions?
					</h2>
					<p className='text-gray-600 text-base sm:text-lg max-w-2xl mx-auto'>
						Have questions? We&apos;ve got you covered. Explore our
						FAQs for quick answers to common queries about our NEET
						preparation app, courses, pricing, and more.
					</p>
				</div>

				{loading ? (
					<div className='text-center py-8'>
						<p className='text-gray-600'>Loading FAQs...</p>
					</div>
				) : error ? (
					<div className='text-center py-8'>
						<p className='text-red-600'>Error: {error}</p>
					</div>
				) : (
					<div className='space-y-4'>
						{faqData.map((faq, index) => (
							<div
								key={faq.id}
								className='border-b-1 border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md'>
								<button
									className='w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between'
									onClick={() => toggleFAQ(index)}>
									<span className='text-base sm:text-lg font-medium text-gray-900 pr-4'>
										{faq.title}
									</span>
									<div className='flex-shrink-0'>
										<div
											className={`group w-8 h-8 rounded-full border-2  flex items-center justify-center transition-all duration-300 border-orange-primary ${
												openIndex === index
													? 'bg-orange-primary hover:bg-white'
													: 'bg-white hover:border-orange-primary hover:bg-orange-primary'
											}`}>
											<Image
												alt='chevron-down'
												src='/assets/chevron-down.svg'
												width={16}
												height={16}
												className={`${
													openIndex === index
														? 'rotate-180 brightness-0 invert group-hover:brightness-100'
														: ' group-hover:brightness-0 group-hover:invert'
												}`}></Image>
										</div>
									</div>
								</button>
								<div
									className={`transition-all duration-300 ease-in-out ${
										openIndex === index
											? 'max-h-96 opacity-100'
											: 'max-h-0 opacity-0'
									}`}>
									<div className='px-4 sm:px-6 pb-4 sm:pb-6'>
										<div 
											className='text-sm sm:text-base text-gray-600 leading-relaxed'
											dangerouslySetInnerHTML={{ __html: faq.answer }}
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
