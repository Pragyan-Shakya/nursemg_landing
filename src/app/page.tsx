'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TrustedBy from '@/components/TrustedBy';
import WhyChoose from '@/components/WhyChoose';
import Institutional from '@/components/Institutional';
import CTA from '@/components/CTA';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	// Handle keyboard events and body scroll
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && isSidebarOpen) {
				setIsSidebarOpen(false);
			}
		};

		const handleBodyScroll = () => {
			if (isSidebarOpen) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'unset';
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		handleBodyScroll();

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = 'unset';
		};
	}, [isSidebarOpen]);

	return (
		<div>
			{/* Hero Section */}
			<Hero isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

			{/* Features Section */}
			<Features />

			{/* Trusted By Section */}
			<TrustedBy />

			{/* Why Choose Section */}
			<WhyChoose />

			{/* Institutional Section */}
			<Institutional />

			{/* CTA Section */}
			<CTA />

			{/* Testimonials Section */}
			<Testimonials />

			{/* FAQ Section */}
			<FAQ />

			{/* Footer */}
			<Footer />
		</div>
	);
}