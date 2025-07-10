'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

interface Blog {
	id: number;
	title: string;
	description: string;
	published_at: string;
	published_by: string;
	blog_image: string;
	category: string;
	view_count: number | null;
	featured: boolean;
	breaking: boolean;
	slide_show: boolean;
	status: boolean;
	created_at: string;
	updated_at: string;
	url: string;
	reading_time: string;
	tags: string[];
}

export default function BlogPage() {
	const [blogs, setBlogs] = useState<Blog[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const response = await fetch(
					'https://011403120524.neetcrack.com/api/blogs',
				);
				if (!response.ok) {
					throw new Error('Failed to fetch blogs');
				}
				const data = await response.json();
				setBlogs(data.data || []);
			} catch (err) {
				setError(
					err instanceof Error ? err.message : 'An error occurred',
				);
			} finally {
				setLoading(false);
			}
		};

		fetchBlogs();
	}, []);

	const featuredBlog = blogs.length > 0 ? blogs[0] : null;
	const regularBlogs = blogs.length > 1 ? blogs.slice(1) : [];

	if (loading) {
		return (
			<div className='min-h-screen bg-white flex items-center justify-center'>
				<div className='text-gray-600'>Loading blogs...</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className='min-h-screen bg-white flex items-center justify-center'>
				<div className='text-red-600'>Error: {error}</div>
			</div>
		);
	}
	return (
		<div className='min-h-screen bg-purple-primary'>
			{/* Header */}
			<header className='bg-purple-primary'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-4'>
					<div className='flex justify-between items-center'>
						<div className='flex items-center gap-2'>
							<Image
								src='/assets/logo.svg'
								alt='NCLEX Logo'
								width={106}
								height={24}
							/>
						</div>

						<nav className='flex items-center gap-4 sm:gap-8'>
							<Link
								href='/blogs'
								className='text-white hover:text-orange-300 transition-colors font-medium text-sm sm:text-[15px]'>
								Blogs
							</Link>
							<a
								href='#'
								className='text-white hover:text-orange-300 transition-colors font-medium text-sm sm:text-[15px]'>
								FAQs
							</a>
							<button className='flex items-center gap-2 bg-transparent text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white font-medium hover:bg-white hover:text-gray-900 transition-colors text-sm sm:text-[15px]'>
								Get started
								<svg
									className='w-4 h-4'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={1.33}
										d='M9 5l7 7-7 7'
									/>
								</svg>
							</button>
						</nav>
					</div>
				</div>
			</header>

			<Image
				title='Hero Image'
				src='/assets/border.svg'
				alt='Hero Image'
				width={1920}
				height={1080}
			/>

			<main className='bg-purple-primary'>
				{/* Hero Title */}
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-16'>
					<h1 className='text-4xl sm:text-5xl lg:text-6xl text-left text-white mb-0 font-instrument leading-tight'>
						NCLEX Blogs
					</h1>
				</div>

				{/* Featured Section */}
				{featuredBlog && (
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pb-8 sm:pb-12 lg:pb-16'>
						<div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
							{/* Featured Blog Card */}
							<div className='bg-orange-100 rounded-2xl overflow-hidden order-2 lg:order-1'>
								<div className='relative h-[300px] sm:h-[400px] lg:h-[454px]'>
									{featuredBlog.blog_image ? (
										<Image
											src={featuredBlog.blog_image}
											alt={featuredBlog.title}
											fill
											className='object-cover'
										/>
									) : (
										<div className='w-full h-full bg-gray-200 flex items-center justify-center'>
											<span className='text-gray-500'>
												No Image
											</span>
										</div>
									)}
								</div>
							</div>

							{/* Featured Content */}
							<div className='order-1 lg:order-2'>
								<div className='mb-4'>
									<span className='text-white/60 text-base font-inter'>
										{featuredBlog.published_at}
									</span>
								</div>
								<h2 className='text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 font-instrument leading-tight'>
									{featuredBlog.title}
								</h2>
								<div
									className='text-white mb-8 leading-relaxed text-base font-inter'
									dangerouslySetInnerHTML={{
										__html:
											featuredBlog.description.length >
											200
												? featuredBlog.description.substring(
														0,
														200,
												  ) + '...'
												: featuredBlog.description,
									}}
								/>
								<div className='flex items-center gap-4 mb-6 sm:mb-8'>
									<span className='text-white/60 text-base font-inter'>
										By
									</span>
									<div className='flex items-center gap-3'>
										<div className='w-7 h-7 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center'>
											<span className='text-sm font-medium text-gray-700'>
												{featuredBlog.published_by?.[0]?.toUpperCase() ||
													'A'}
											</span>
										</div>
										<span className='text-white font-medium text-base font-inter'>
											{featuredBlog.published_by}
										</span>
									</div>
								</div>
								<Link
									href={`/blogs/${featuredBlog.url}`}
									className='inline-flex items-center gap-2 bg-transparent text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-white font-medium hover:bg-white hover:text-gray-900 transition-colors text-sm sm:text-[15px] font-inter'>
									Read more
									<svg
										className='w-4 h-4'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={1.33}
											d='M9 5l7 7-7 7'
										/>
									</svg>
								</Link>
							</div>
						</div>
					</div>
				)}
			</main>

			{/* Blog Grid Section */}
			<section className='bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-16'>
					<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16'>
						{regularBlogs.map(blog => (
							<Link href={`/blogs/${blog.url}`} key={blog.id}>
								<article className='bg-white hover:shadow-lg transition-shadow cursor-pointer p-6'>
									<div className='relative h-[200px] sm:h-[220px] rounded-xl overflow-hidden mb-4 sm:mb-6'>
										{blog.blog_image ? (
											<Image
												src={blog.blog_image}
												alt={blog.title}
												fill
												className='object-cover'
											/>
										) : (
											<div className='w-full h-full bg-gray-200 flex items-center justify-center'>
												<span className='text-gray-500'>
													No Image
												</span>
											</div>
										)}
									</div>
									<div className='mb-2 sm:mb-3'>
										<span className='text-gray-700/70 text-sm font-inter'>
											{blog.published_at}
										</span>
									</div>
									<h3 className='text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-3 font-instrument'>
										{blog.title}
									</h3>
									<div
										className='text-gray-900 text-sm mb-3 sm:mb-4 leading-relaxed font-inter'
										dangerouslySetInnerHTML={{
											__html:
												blog.description.length > 120
													? blog.description.substring(
															0,
															120,
													  ) + '...'
													: blog.description,
										}}
									/>
									<div className='flex items-center gap-4'>
										<span className='text-gray-600/60 text-sm font-inter'>
											By
										</span>
										<div className='flex items-center gap-3'>
											<div className='w-6 h-6 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center'>
												<span className='text-xs font-medium text-gray-700'>
													{blog.published_by?.[0]?.toUpperCase() ||
														'A'}
												</span>
											</div>
											<span className='text-gray-900 font-medium text-sm font-inter'>
												{blog.published_by}
											</span>
										</div>
									</div>
								</article>
							</Link>
						))}
					</div>

					{/* Load More Button */}
					<div className='text-center'>
						<button className='inline-flex items-center gap-2 bg-purple-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-purple-700 transition-colors text-sm sm:text-[15px] font-inter'>
							Load more
							<svg
								className='w-4 h-4'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={1.33}
									d='M9 5l7 7-7 7'
								/>
							</svg>
						</button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	);
}
