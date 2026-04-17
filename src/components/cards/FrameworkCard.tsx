import { cn } from '@/utils';
import { Card, Flex } from '@mantine/core';
import { type LucideIcon } from 'lucide-react';

export interface FrameworkCardProps {
	id?: number | string;
	title: string;
	description: string;
	icon: LucideIcon;
	w?: number;
	h?: number;
}

const FrameworkCard = ({
	id,
	title,
	description,
	icon: Icon,
	w,
	h,
}: FrameworkCardProps) => {
	return (
		<Card w={w ? w : 280} h={h ? h : 230} radius={'xl'} shadow='lg'>
			<Flex direction={'column'} gap={20} className='w-full h-full py-5 px-3'>
				<div
					className={cn('w-fit p-2 bg-secondary/20 rounded-md', {
						'bg-tertiary/10': id === 1,
						'bg-success/10': id === 2,
					})}
				>
					<Icon
						className={cn('text-primary', {
							'text-tertiary': id === 1,
							'text-success': id === 2,
						})}
						size={24}
					/>
				</div>
				<h3 className='font-bold'>{title}</h3>
				<p className='text-sm'>{description}</p>
			</Flex>
		</Card>
	);
};

export default FrameworkCard;
