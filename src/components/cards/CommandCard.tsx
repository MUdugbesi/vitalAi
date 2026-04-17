'use client';

import { cn } from '@/utils';
import { Card, Flex } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import Image from 'next/image';

export interface CommandCardProps {
	id?: string | number;
	title: string;
	image: string;
	description: string;
}

const CommandCard = ({ title, image, description, id }: CommandCardProps) => {
	const { hovered, ref } = useHover();
	return (
		<>
			<Flex direction={'column'} w={382} className='group'>
				{/* <Card w={382} h={'auto'}>
					<Card.Section> */}
				<div
					className={cn(
						'w-105 h-85 overflow-hidden object-contain transition-all ease-in-out duration-300',
						{
							'scale-105 cursor-pointer': hovered,
							'h-125': id === 1,
						},
					)}
					ref={ref}
				>
					<Image
						src={image}
						alt='image'
						className='w-full h-full rounded-2xl mb-5 object-cover object-top'
						width={100}
						height={100}
					/>
				</div>
				<h4 className='text-xl font-bold mt-5 group-hover:text-primary'>
					{title}
				</h4>
				<p className='text-xs'>{description}</p>
			</Flex>
		</>
	);
};

export default CommandCard;
