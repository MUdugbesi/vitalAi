'use client';

import Image from 'next/image';
import { Badge, Button, Flex, Card, Text } from '@mantine/core';
import { MoveRight, User } from 'lucide-react';
import { useIsMobile } from '@/hooks/useIsMobile';

const Hero = () => {
	const isMobile = useIsMobile();
	return (
		<Flex className='py-10 md:py-24 items-center justify-between px-10 md:min-h-[90vh] w-full md:w-[90%] mx-auto'>
			<div className='w-full'>
				<Badge variant='light'>
					<Flex align={'center'} gap={4}>
						<div className='w-2 h-2 rounded-full bg-green-400 animate animate-pulse'></div>{' '}
						AI ENGINE ONLINE
					</Flex>
				</Badge>
				<h1 className='text-4xl md:text-[80px] font-extrabold font-public-sans leading-normal md:leading-26 mt-2 md:mt-10'>
					Anticipating Critical <br />
					<span className='text-primary-foreground italic'>Patient Shifts</span>
					<br />
					Before They Occur.
				</h1>
				<p className='w-[50%] mt-14'>
					VitalSign AI leverages credentialed clinical data to provide
					real-time, explainable scoring for early deterioration detection.
					Built for clinical precision.
				</p>

				<Flex gap={20} className='mt-14 flex-col md:flex-row'>
					<Button
						color='#007f3b'
						h={60}
						w={320}
						rightSection={<MoveRight size={14} />}
					>
						Access Patient Dashboard
					</Button>
					<Button
						variant='default'
						w={isMobile ? 320 : 150}
						h={60}
						leftSection={<User />}
					>
						Lead Login
					</Button>
				</Flex>
			</div>
			<div className='relative hidden md:flex'>
				<div className='absolute right-10 top-10 z-10'>
					<Card shadow='sm' radius={'lg'} w={200} h={140}>
						<Text fw={400} size='xs' mt='xs'>
							WARD 4B ACTIVE
						</Text>
						<Text
							fw={900}
							size='xl'
							mt='xs'
							className='text-primary-foreground'
						>
							98.4%
						</Text>

						<Text c='dimmed' size='xs'>
							Prediction Accuracy on MIMIC-IV Benchmarks...
						</Text>
					</Card>
				</div>
				<Image
					src={'/images/home/hero1.png'}
					alt='Clinical Visualization'
					width={700}
					height={700}
					className='rounded-4xl drop-shadow-xl drop-shadow-foreground/40'
					loading='eager'
				/>
			</div>
		</Flex>
	);
};

export default Hero;
