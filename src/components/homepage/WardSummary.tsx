'use client';

import { Card, Flex, Grid, Text } from '@mantine/core';
import SummaryCard, { SummaryCardProps } from '../cards/SummaryCard';
import {
	CheckCircle2,
	OctagonAlertIcon,
	TimerIcon,
	TriangleAlert,
} from 'lucide-react';
import { useIsMobile } from '@/hooks/useIsMobile';

const SUMMARY: SummaryCardProps[] = [
	{ text: 'Critical', icon: OctagonAlertIcon, score: 2 },
	{ text: 'Warning', icon: TriangleAlert, score: 5 },
	{ text: 'Stable', icon: CheckCircle2, score: 43 },
];

const WardSummary = () => {
	const isMobile = useIsMobile();
	return (
		<div className='w-full bg-foreground/5 text-foreground mt-10'>
			<div className='md:w-[80%] mx-auto md:min-h-112.5 items-center justify-center max-sm:px-5 py-20'>
				<Flex className='flex-col md:flex-row md:items-center md:justify-between'>
					<section>
						<Text fw={'bold'} size='xl'>
							Ward Summary: At a Glance
						</Text>
						<p>Real-time prioritization for current staffing shift</p>
					</section>
					<Card className='bg-background max-sm:mt-4' w={240} h={75}>
						<Flex gap={10}>
							<div className='w-10 h-10 rounded-md flex items-center justify-center bg-secondary/20'>
								<TimerIcon className='text-primary' />
							</div>

							<div>
								<Text fz={10} fw={'bold'} className='text-secondary'>
									AVERAGE WARNING LEAD-TIME
								</Text>
								<Text fw={'bold'}>3.2 Hours</Text>
							</div>
						</Flex>
					</Card>
				</Flex>
				<Grid
					align='center'
					className='mt-12'
					justify={isMobile ? 'center' : 'space-between'}
					gap={30}
				>
					{SUMMARY.map(({ text, score, icon }, _id) => (
						<Grid.Col key={_id} span={isMobile ? 12 : 4}>
							<SummaryCard text={text} score={score} icon={icon} />
						</Grid.Col>
					))}
				</Grid>
			</div>
		</div>
	);
};

export default WardSummary;
