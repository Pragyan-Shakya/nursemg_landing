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
	return (
		<div>
			{/* Hero Section */}
			<Hero />

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