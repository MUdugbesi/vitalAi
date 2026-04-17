'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedSection = ({
	children,
	isNavbar,
	...props
}: {
	isNavbar?: boolean;
	children: React.ReactNode;
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: isNavbar ? 1 : 0, y: 50 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			{...props}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedSection;
