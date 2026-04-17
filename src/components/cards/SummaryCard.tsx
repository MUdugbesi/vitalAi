import { useIsMobile } from '@/hooks/useIsMobile';
import { cn } from '@/utils';
import { Card, Flex, Text } from '@mantine/core';
import { type LucideIcon } from 'lucide-react';

export interface SummaryCardProps {
	text: 'Critical' | 'Warning' | 'Stable';
	score: number;
	icon: LucideIcon;
}

const SummaryCard = ({ text, score, icon: Icon }: SummaryCardProps) => {
	const isMobile = useIsMobile();
	return (
		<Card
			h={152}
			w={isMobile ? 350 : 450}
			className={cn('border-l-6', {
				'border-red-700': text.toLocaleLowerCase() === 'critical',
				'border-yellow-500': text.toLocaleLowerCase() === 'warning',
				'border-green-600': text.toLocaleLowerCase() === 'stable',
			})}
			shadow='xl'
		>
			<Flex align={'center'} justify={'space-between'} className='px-10 h-full'>
				<div className='flex flex-col items-start justify-end'>
					<Text
						h={10}
						fz={20}
						fw={'bold'}
						className={cn('uppercase', {
							'text-red-700': text.toLocaleLowerCase() === 'critical',
							'text-yellow-500': text.toLocaleLowerCase() === 'warning',
							'text-green-600': text.toLocaleLowerCase() === 'stable',
						})}
					>
						{text}
					</Text>
					<Text fw={'bolder'} fz={60}>
						{score.toString().length === 1 ? '0' + score.toString() : score}
					</Text>
				</div>
				<Flex
					className={cn('rounded-full', {
						'bg-red-100 text-red-700': text.toLocaleLowerCase() === 'critical',
						'bg-yellow-100 text-yellow-500':
							text.toLocaleLowerCase() === 'warning',
						'bg-green-100 text-green-600':
							text.toLocaleLowerCase() === 'stable',
					})}
					align={'center'}
					w={64}
					h={64}
					justify={'center'}
				>
					<Icon />
				</Flex>
			</Flex>
		</Card>
	);
};

export default SummaryCard;
