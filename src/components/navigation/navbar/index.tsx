'use client';

import {
	Badge,
	Button,
	Flex,
	Menu,
	MenuItem,
	MenuLabel,
	Text,
} from '@mantine/core';
import { NAV_LINKS } from './links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils';
import { useIsMobile } from '@/hooks/useIsMobile';
import { MenuIcon, TriangleAlert, X } from 'lucide-react';
import { useState } from 'react';

const Index = () => {
	const pathname = usePathname();
	const isMobile = useIsMobile();
	const [opened, setOpened] = useState<boolean>(false);

	return (
		<nav className='w-full flex h-18 bg-white dark:bg-background/80 items-center justify-between px-5 md:px-20 drop-shadow-xs md:drop-shadow-lg drop-shadow-foreground/60'>
			<Flex
				align={'center'}
				className='flex flex-col md:flex-row md:gap-6'
				justify={'left'}
			>
				<Link href={'/'}>
					<h1 className='font-black text-[20px] text-primary-foreground'>
						VitalSign AI
					</h1>
				</Link>
				<Badge color='#00478d'>BETA - NOT FOR CLINICAL DIAGNOSIS</Badge>
			</Flex>

			{isMobile && (
				<Menu width={300} opened={opened} onChange={setOpened}>
					<Menu.Target>
						{opened ? <X /> : <MenuIcon className='hover:cursor-pointer' />}
					</Menu.Target>
					<Menu.Dropdown className='min-h-screen'>
						<MenuLabel>Quick links</MenuLabel>
						<Flex align={''} gap={5} direction={'column'}>
							{NAV_LINKS.map(({ link, title }, _id) => (
								<MenuItem key={_id}>
									<Link
										key={_id}
										href={link}
										className={cn(
											'hover:text-primary-foreground active:mt-1 text-sm',
											{
												'font-semibold text-primary-foreground':
													pathname === link,
											},
										)}
									>
										{title}
									</Link>
								</MenuItem>
							))}
							<Menu.Divider />
							<MenuLabel>Critical</MenuLabel>
							<MenuItem leftSection={<TriangleAlert size={14} />}>
								<p className='text-tertiary hover:cursor-pointer font-semibold'>
									Emergency
								</p>
							</MenuItem>
							<Menu.Divider />
							<MenuLabel>Get Access</MenuLabel>
							<Button
								variant='gradient'
								gradient={{ from: '#00478D', to: '#005eb8', deg: 90 }}
								ml={10}
							>
								Clinician Login
							</Button>
						</Flex>
					</Menu.Dropdown>
				</Menu>
			)}

			{!isMobile && (
				<div className='hidden md:flex'>
					<Flex align={'center'} gap={20} hidden={isMobile && true}>
						{NAV_LINKS.map((link, _id) => (
							<Link
								key={_id}
								href={link.link}
								className={cn(
									'hover:text-primary-foreground active:mt-1 text-sm',
									{
										'font-semibold text-primary-foreground':
											pathname === link.link,
									},
								)}
							>
								{link.title}
							</Link>
						))}

						<p className='text-primary-foreground hover:cursor-pointer font-semibold ml-20'>
							Emergency Access
						</p>
						<Button
							variant='gradient'
							gradient={{ from: '#00478D', to: '#005eb8', deg: 90 }}
						>
							Clinician Login
						</Button>
					</Flex>
				</div>
			)}
		</nav>
	);
};

export default Index;
