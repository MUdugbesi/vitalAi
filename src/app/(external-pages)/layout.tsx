import Footer from '@/components/navigation/footer';
import Navbar from '@/components/navigation/navbar';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function LandingLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex min-h-screen w-full flex-col justify-between bg-background text-foreground'>
			{/* <AnimatedSection isNavbar={true}> */}
			<Navbar />
			{/* </AnimatedSection> */}
			<div className='flex-1 mx-auto mt-6'>{children}</div>
			<AnimatedSection>
				<Footer />
			</AnimatedSection>
		</div>
	);
}
