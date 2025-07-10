'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { useState, useEffect, use } from 'react';

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

interface BlogPageProps {
	params: Promise<{
		slug: string;
	}>;
}

export default function BlogDetailPage({ params }: BlogPageProps) {
	const resolvedParams = use(params);
	const [blog, setBlog] = useState<Blog | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchBlog = async () => {
			try {
				const response = await fetch(`https://011403120524.neetcrack.com/api/blogs/${resolvedParams.slug}`);
				if (!response.ok) {
					throw new Error('Failed to fetch blog');
				}
				const response_data = await response.json();
				setBlog(response_data.data);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'An error occurred');
			} finally {
				setLoading(false);
			}
		};

		fetchBlog();
	}, [resolvedParams.slug]);

	if (loading) {
		return (
			<div className='min-h-screen bg-white flex items-center justify-center'>
				<div className='text-gray-600'>Loading blog...</div>
			</div>
		);
	}

	if (error || !blog) {
		return (
			<div className='min-h-screen bg-white flex items-center justify-center'>
				<div className='text-red-600'>Error: {error || 'Blog not found'}</div>
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-white'>
			{/* Header */}
			<header className='bg-purple-primary'>
				<div className='max-w-7xl mx-auto px-20 py-4'>
					<div className='flex justify-between items-center'>
						<div className='flex items-center gap-2'>
							<Link href='/'>
								<Image
									src='/assets/logo.svg'
									alt='NCLEX Logo'
									width={106}
									height={24}
								/>
							</Link>
						</div>

						<nav className='hidden md:flex items-center gap-8'>
							<Link
								href='/blogs'
								className='text-white hover:text-orange-300 transition-colors font-medium text-[15px]'>
								Blogs
							</Link>
							<a
								href='#'
								className='text-white hover:text-orange-300 transition-colors font-medium text-[15px]'>
								FAQs
							</a>
							<button className='flex items-center gap-2 bg-transparent text-white px-6 py-3 rounded-full border border-white font-medium hover:bg-white hover:text-gray-900 transition-colors text-[15px]'>
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

				<div className='w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent opacity-50'></div>
			</header>

			{/* Breadcrumb */}
			<section className='bg-white py-8'>
				<div className='max-w-4xl mx-auto px-8'>
					<nav className='flex items-center gap-2 text-sm text-gray-600'>
						<Link href='/' className='hover:text-purple-primary'>
							Home
						</Link>
						<span>/</span>
						<Link href='/blogs' className='hover:text-purple-primary'>
							Blogs
						</Link>
						<span>/</span>
						<span className='text-gray-900'>{blog.title}</span>
					</nav>
				</div>
			</section>

			{/* Blog Content */}
			<main className='bg-white'>
				<article className='max-w-4xl mx-auto px-8 py-8'>
					{/* Blog Header */}
					<header className='mb-8'>
						<div className='flex items-center gap-4 mb-6'>
							<span className='bg-purple-primary/10 text-purple-primary px-3 py-1 rounded-full text-sm font-medium'>
								{blog.category}
							</span>
							<span className='text-gray-500 text-sm'>
								{blog.reading_time}
							</span>
						</div>

						<h1 className='text-4xl font-bold text-gray-900 mb-6 font-instrument leading-tight'>
							{blog.title}
						</h1>

						<div className='flex items-center gap-4 mb-8'>
							<div className='flex items-center gap-3'>
								<div className='w-10 h-10 bg-purple-primary rounded-full flex items-center justify-center'>
									<span className='text-white font-medium'>
										{blog.published_by?.[0]?.toUpperCase() || 'A'}
									</span>
								</div>
								<div>
									<p className='text-gray-900 font-medium'>
										{blog.published_by}
									</p>
									<p className='text-gray-500 text-sm'>
										{blog.published_at}
									</p>
								</div>
							</div>
							{blog.view_count && (
								<div className='ml-auto text-gray-500 text-sm'>
									{blog.view_count} views
								</div>
							)}
						</div>

						{/* Featured Image */}
						{blog.blog_image && (
							<div className='relative h-[400px] rounded-2xl overflow-hidden mb-8'>
								<Image
									src={blog.blog_image}
									alt={blog.title}
									fill
									className='object-cover'
								/>
							</div>
						)}
					</header>

					{/* Blog Content */}
					<div className='prose prose-lg max-w-none'>
						<div 
							className='text-gray-900 leading-relaxed font-inter'
							dangerouslySetInnerHTML={{ __html: blog.description }}
						/>
					</div>

					{/* Tags */}
					{blog.tags && blog.tags.length > 0 && (
						<div className='mt-12 pt-8 border-t border-gray-200'>
							<h3 className='text-lg font-medium text-gray-900 mb-4'>Tags</h3>
							<div className='flex flex-wrap gap-2'>
								{blog.tags.map((tag, index) => (
									<span
										key={index}
										className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'>
										{tag}
									</span>
								))}
							</div>
						</div>
					)}

					{/* Back to Blog */}
					<div className='mt-12 pt-8 border-t border-gray-200'>
						<Link
							href='/blogs'
							className='inline-flex items-center gap-2 text-purple-primary hover:text-purple-700 font-medium'>
							<svg
								className='w-4 h-4'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={1.33}
									d='M15 19l-7-7 7-7'
								/>
							</svg>
							Back to all blogs
						</Link>
					</div>
				</article>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
}