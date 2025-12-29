import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

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
	seo_title?: string;
	seo_description?: string;
}

interface BlogPageProps {
	params: Promise<{
		slug: string;
	}>;
}

async function fetchBlog(slug: string): Promise<Blog | null> {
	try {
		const response = await fetch(
			`https://admin.neuroflip.com/api/blogs/${slug}`,
			{
				next: { revalidate: 60 } // ISR with 60 second revalidation
			}
		);
		if (!response.ok) {
			return null;
		}
		const response_data = await response.json();
		return response_data.data;
	} catch (error) {
		console.error('Error fetching blog:', error);
		return null;
	}
}

export async function generateMetadata(
	{ params }: BlogPageProps
): Promise<Metadata> {
	const { slug } = await params;
	const blog = await fetchBlog(slug);

	if (!blog) {
		return {
			title: 'Blog Not Found',
			description: 'The requested blog post could not be found.',
		};
	}

	// Strip HTML tags from description for meta tag
	const plainDescription = blog.description
		.replace(/<[^>]*>/g, '')
		.substring(0, 160);

	return {
		title: blog.seo_title ?? blog.title,
		description: blog.seo_description ?? plainDescription,
	};
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
	const { slug } = await params;
	const blog = await fetchBlog(slug);

	if (!blog) {
		return (
			<div className='min-h-screen bg-white flex items-center justify-center'>
				<div className='text-red-600'>
					Error: Blog not found
				</div>
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-white'>
			<div className='min-h-screen'>
				<Header/>

				<main className=''>
					<article className='bg-purple-primary'>
						<header className='  max-w-5xl mx-auto  px-8 py-8'>
							<h1 className='text-2xl md:text-5xl font-semibold text-center text-white mb-6 font-instrument leading-tight'>
								{blog.title}
							</h1>

							<div className='flex items-center justify-center text-gray-300 gap-10 mb-8'>
								<div className='flex items-center gap-2'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='20'
										height='20'
										fill='currentColor'
										className='bi bi-person'
										viewBox='0 0 16 16'>
										<path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z' />
									</svg>
									{blog.published_by}
								</div>
								<div className='flex items-center gap-2'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='20'
										height='20'
										fill='currentColor'
										className='bi bi-calendar2'
										viewBox='0 0 16 16'>
										<path d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z' />
										<path d='M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z' />
									</svg>
									{blog.published_at}
								</div>
								<div className='flex items-center gap-2'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='20'
										height='20'
										fill='currentColor'
										className='bi bi-clock'
										viewBox='0 0 16 16'>
										<path d='M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z' />
										<path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0' />
									</svg>
									{blog.reading_time}
								</div>
							</div>
						</header>
					</article>
					<article className='bg-gradient-to-b from-purple-primary from-50% to-white to-50%'>
						<div className='max-w-5xl mx-auto px-4 py-4 md:p-8'>
							{blog.blog_image && (
								<div className='relative h-[270px] md:h-[520px] rounded-2xl mb-8'>
									<Image
										src={blog.blog_image}
										alt={blog.title}
										fill
										className='object-contain drop-shadow-lg'
									/>
								</div>
							)}
						</div>
					</article>
				</main>
			</div>
			<section className='bg-white'>
				<article className='max-w-4xl mx-auto px-8 py-4'>
					<div className='prose prose-lg max-w-none'>
						<div
							className='text-gray-900 leading-relaxed font-inter'
							dangerouslySetInnerHTML={{
								__html: blog.description,
							}}
						/>
					</div>

					{blog.tags && blog.tags.length > 0 && (
						<div className='mt-12 pt-8 border-t border-gray-200'>
							<h3 className='text-lg font-medium text-gray-900 mb-4'>
								Tags
							</h3>
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
			</section>
			{/* Footer */}
			<Footer />
		</div>
	);
}
