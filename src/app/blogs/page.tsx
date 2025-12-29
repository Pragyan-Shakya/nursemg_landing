import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
	title: 'NEET PG Blogs',
	description: 'Explore expert NEET PG preparation tips, study strategies, and medical insights from our comprehensive blog collection.',
};

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

async function fetchBlogs(): Promise<Blog[]> {
	try {
		const response = await fetch(
			'https://admin.neuroflip.com/api/blogs',
			{
				next: { revalidate: 60 } // Revalidate every 60 seconds
			}
		);
		if (!response.ok) {
			throw new Error('Failed to fetch blogs');
		}
		const data = await response.json();
		return data.data || [];
	} catch (err) {
		console.error('Error fetching blogs:', err);
		return [];
	}
}

export default async function BlogPage() {
	const blogs = await fetchBlogs();
	const featuredBlog = blogs.length > 0 ? blogs[0] : null;
	const regularBlogs = blogs.length > 1 ? blogs.slice(1) : [];

	return (
		<div className='min-h-screen bg-purple-primary'>
			{/* Header */}
			<Header />

			<main className='bg-purple-primary'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-16'>
					<h1 className='text-4xl sm:text-5xl lg:text-6xl text-left text-white mb-0 font-instrument leading-tight'>
						NCLEX Blogs
					</h1>
				</div>

				{featuredBlog && (
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pb-8 sm:pb-12 lg:pb-16'>
						<div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
							<div className='bg-orange-100 rounded-2xl overflow-hidden'>
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

							<div className=''>
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
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	);
}
