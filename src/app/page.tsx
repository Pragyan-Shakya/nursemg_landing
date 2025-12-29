import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TrustedBy from '@/components/TrustedBy';
import WhyChoose from '@/components/WhyChoose';
import Institutional from '@/components/Institutional';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Neurosalaah from '@/components/Neurosalaah';

export const metadata: Metadata = {
	title: {
		absolute: 'Neuroflip | Neuroflip flashcards for NEET PG & FMGE',
	},
	description: 'Neuroflip helps you retain what you study so that you are more prepared than ever to crack NEET PG exams.',
};

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
			{/* <CTA /> */}
			<Neurosalaah />

			{/* Testimonials Section */}
			<Testimonials />

			{/* FAQ Section */}
			<FAQ />

			{/* Footer */}
			<Footer />
		</div>
	);
}