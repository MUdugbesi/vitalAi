'use client';

import FrameworkCard, { FrameworkCardProps } from '../cards/FrameworkCard';
import { ChartNoAxesGantt, Database } from 'lucide-react';
import { Avatar, Badge, Flex, Text } from '@mantine/core';
import { useIsMobile } from '@/hooks/useIsMobile';

const FRAMEWORKS: FrameworkCardProps[] = [
	{
		title: 'MIMIC-IV Trained',
		description:
			'Validated on credentialed clinical data from thousands of intensive care admissions.',
		icon: Database,
	},
	{
		title: 'SHAP Reasoning',
		description:
			'Every score includes a feature importance breakdown of contributing vitals.',
		icon: ChartNoAxesGantt,
	},
];

const Framework = () => {
	const isMobile = useIsMobile();
	return (
		<Flex
			className='md:min-h-85.25 my-24 w-full md:w-[90%] mx-auto flex-col-reverse md:flex-row max-sm:p-4'
			justify='center'
			gap={50}
		>
			<Flex
				className='w-[50%] flex-col md:flex-row'
				align={'center'}
				justify={'space-evenly'}
			>
				{FRAMEWORKS.map(({ title, description, icon }, _id) => (
					<FrameworkCard
						key={_id}
						title={title}
						description={description}
						icon={icon}
					/>
				))}
			</Flex>
			<Flex className='flex-col w-[50%] gap-10'>
				<Badge
					variant='light'
					className='bg-secondary text-primary'
					fw={'normal'}
				>
					SAFE AI FRAMEWORK
				</Badge>
				<Text fw={'bolder'} fz={isMobile ? 20 : 45} lh={'h1'}>
					Designed for Clinical Trust, Not Just Correlation.
				</Text>
				<Text>
					VitalSign AI doesn&apos;t just provide a number. We provide the Why.
					Using advanced SHAP explainability, clinicians can see exactly which
					parameters—respiratory rate, SpO2, or heart rate volatility—are
					driving the risk score.
				</Text>
				<Flex gap={10} align={'center'}>
					<div className='flex gap-2'>
						<Avatar.Group>
							<Avatar src={'/images/home/hero1.png'} alt='person1' />
							<Avatar src={'/images/home/hero1.png'} alt='person2' />
							<Avatar>+2</Avatar>
						</Avatar.Group>
					</div>
					<aside className='italic'>
						Trusted by lead registrars for secondary validation.
					</aside>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Framework;
