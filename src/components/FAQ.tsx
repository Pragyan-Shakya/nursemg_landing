'use client';

import Image from 'next/image';
import { useState } from 'react';

interface FAQItem {
	question: string;
	answer: string;
}

const faqData: FAQItem[] = [
	{
		question: 'What is NeuroFlip?',
		answer: 'NeuroFlip is a flashcard-based app designed for NEET-PG, FMGE, and NEET students. It uses time-tested techniques like active recall and spaced repetition, boosting your retention by over 50%. This ensures you remember key concepts far longer and improve your exam performance.',
	},
	{
		question: 'What is Active Recall and how does it help?',
		answer: 'Active recall is a study technique where you actively try to remember information without looking at your notes. This method forces your brain to retrieve information from memory, strengthening neural pathways and improving long-term retention significantly.',
	},
	{
		question:
			'What is Spaced Repetition and how does it help prepare for the NEET-PG exam?',
		answer: 'Spaced repetition is a learning technique that involves reviewing information at increasing intervals over time. This method helps move information from short-term to long-term memory, making it perfect for NEET-PG preparation where retention of vast amounts of medical knowledge is crucial.',
	},
	{
		question: 'How does NeuroFlip help NEET-PG/FMGE aspirants?',
		answer: 'NeuroFlip provides comprehensive flashcards covering all high-yield topics for NEET-PG and FMGE. Our scientifically-backed approach using active recall and spaced repetition ensures better retention and recall during exams, helping you achieve better scores.',
	},
	{
		question: 'How do Flashcards compare to MCQs?',
		answer: 'Flashcards focus on active recall and conceptual understanding, while MCQs test pattern recognition. Flashcards help build strong foundational knowledge that makes solving MCQs easier and more intuitive, leading to better exam performance.',
	},
	{
		question: 'What is Daily capsule?',
		answer: 'Daily capsule is a curated set of high-yield flashcards delivered daily to ensure consistent studying. Each capsule contains the most important topics for NEET-PG preparation, handpicked by toppers to maximize your learning efficiency.',
	},
	{
		question:
			'Are the flashcards in this app up-to-date with the latest NEET-PG content?',
		answer: 'Yes, our flashcards are regularly updated to reflect the latest NEET-PG syllabus and exam patterns. Our team of medical experts and NEET-PG toppers ensure all content remains current and relevant to the latest examination requirements.',
	},
	{
		question:
			'Is NeuroFlip suitable for both medical students and NEET-PG aspirants?',
		answer: 'Absolutely! NeuroFlip is designed for medical students at all levels, from undergraduate studies to NEET-PG preparation. The content is structured to support both foundational learning and advanced exam preparation.',
	},
	{
		question: 'Is NeuroFlip helpful for FMGE?',
		answer: 'Yes, NeuroFlip is extremely helpful for FMGE preparation. Our flashcards cover all the essential topics tested in FMGE, and the spaced repetition system ensures you retain information effectively for the exam.',
	},
	{
		question: 'Why is NeuroFlip a Must for Repeaters?',
		answer: "Repeaters often struggle with retention and avoiding previous mistakes. NeuroFlip's spaced repetition system ensures you don't forget what you've learned, while active recall helps identify and strengthen weak areas, making it perfect for repeaters who need efficient revision.",
	},
];

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className='bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-12 sm:mb-16'>
					<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
						Frequently Asked Questions?
					</h2>
					<p className='text-gray-600 text-base sm:text-lg max-w-2xl mx-auto'>
						Have questions? We've got you covered. Explore our FAQs
						for quick answers to common queries about our NEET
						preparation app, courses, pricing, and more.
					</p>
				</div>

				<div className='space-y-4'>
					{faqData.map((faq, index) => (
						<div
							key={index}
							className='border-b-1 border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md'>
							<button
								className='w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between'
								onClick={() => toggleFAQ(index)}>
								<span className='text-base sm:text-lg font-medium text-gray-900 pr-4'>
									{faq.question}
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
									<p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
										{faq.answer}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
