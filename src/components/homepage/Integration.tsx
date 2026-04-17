import { Badge, Flex, Text } from '@mantine/core';
import React from 'react';
import FrameworkCard from '../cards/FrameworkCard';
import {
	AudioLines,
	ChartNoAxesGantt,
	GaugeIcon,
	SquareStack,
} from 'lucide-react';

const INTEGRATIONS = [
	{
		title: 'Centralized Monitoring',
		description:
			'Command center oversight for distributed patient populations, allowing a single clinical team to monitor hundreds of virtual beds simultaneously.',
		icon: ChartNoAxesGantt,
	},
	{
		title: 'Early Deterioration Detection',
		description:
			'AI-driven alerts identify subtle physiological shifts hours before traditional thresholds, enabling proactive intervention at home.',
		icon: GaugeIcon,
	},
	{
		title: 'Reduced Readmissions',
		description:
			'Closing the loop on post-discharge care. Intelligent monitoring reduces the revolving door effect of preventable hospital readmissions.',
		icon: SquareStack,
	},
];

const Integration = () => {
	return (
		<div className='bg-foreground/5 mt-10 py-20'>
			<Flex
				className='min-h-85.25 w-[90%] mx-auto'
				justify='center'
				gap={50}
				direction={'column'}
			>
				<Flex className='flex-col w-[50%] gap-10 pl-14'>
					<Badge
						variant='light'
						className='bg-secondary text-primary'
						fw={'normal'}
					>
						AT-HOME HEALTHCARE
					</Badge>
					<Text fw={'bolder'} fz={45} lh={'h1'}>
						Virtual Ward Integration
					</Text>
					<Text>
						Facilitating hospital-level care in the comfort of a patient’s home.
						VitalSign AI bridges the gap between acute care and community
						monitoring, ensuring safety and efficiency through advanced remote
						diagnostics.
					</Text>
				</Flex>
				<Flex align={'center'} justify={'space-evenly'}>
					{INTEGRATIONS.map(({ title, description, icon }, _id) => (
						<FrameworkCard
							key={_id}
							id={_id}
							title={title}
							description={description}
							icon={icon}
							w={400}
							h={269}
						/>
					))}
				</Flex>
			</Flex>
		</div>
	);
};

export default Integration;
