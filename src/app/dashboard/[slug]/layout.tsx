'use client';

import { Suspense } from 'react';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className='flex h-screen min-h-screen w-full flex-col overflow-hidden'>
			<div className='flex h-full w-full flex-1'>
				<Suspense>{children}</Suspense>
			</div>
		</main>
	);
}
