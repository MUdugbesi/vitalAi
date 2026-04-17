import AnimatedSection from '../shared/AnimatedSection';
import ClinicalCommand from './ClinicalCommand';
import Framework from './Framework';
import Hero from './Hero';
import Integration from './Integration';
import WardSummary from './WardSummary';

const HomePage = () => {
	return (
		<>
			<AnimatedSection>
				<Hero />
			</AnimatedSection>
			<AnimatedSection>
				<WardSummary />
			</AnimatedSection>
			<AnimatedSection>
				<Framework />
			</AnimatedSection>
			<AnimatedSection>
				<Integration />
			</AnimatedSection>
			<AnimatedSection>
				<ClinicalCommand />
			</AnimatedSection>
		</>
	);
};

export default HomePage;
