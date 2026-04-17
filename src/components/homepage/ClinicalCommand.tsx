import { Flex, Text } from '@mantine/core';
import CommandCard, { CommandCardProps } from '../cards/CommandCard';

const COMMAND_ACTIONS: CommandCardProps[] = [
	{
		image: '/images/home/Deep_dive.png',
		title: 'Precision Triage',
		description:
			'6-hour trend sparklines for immediate risk stratification across the ward.',
	},
	{
		image: '/images/home/deep-dive.png',
		title: 'Clinical Dive',
		description:
			'Detailed vitals monitor coupled with explainable SHAP reasoning for diagnostic confidence.',
	},
	{
		image: '/images/home/escalation.png',
		title: 'Level 1 & 2 Escalation',
		description:
			'Seamless video consultation and rapid response dispatch for urgent patient needs.',
	},
];

const ClinicalCommand = () => {
	return (
		<Flex
			className='min-h-85.25 w-[90%] mx-auto mt-10 py-20'
			justify='center'
			gap={50}
			direction={'column'}
		>
			<Flex
				className='flex-col gap-5 pl-14'
				align={'center'}
				justify={'center'}
			>
				<Text fw={'bolder'} fz={45} lh={'h1'}>
					Clinical Command in Action
				</Text>
				<Text className='mx-auto w-[45%] text-center'>
					Experience the interface designed for rapid decision-making and deep
					physiological insight.
				</Text>
			</Flex>
			<Flex
				align={'center'}
				justify={'space-evenly'}
				gap={50}
				className='w-[90%] mx-auto mt-10'
			>
				{COMMAND_ACTIONS.map(({ title, description, image }, _id) => (
					<CommandCard
						key={_id}
						id={_id}
						title={title}
						description={description}
						image={image}
					/>
				))}
			</Flex>
		</Flex>
	);
};

export default ClinicalCommand;
