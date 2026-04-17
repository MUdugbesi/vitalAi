import type { Metadata } from 'next';
import { Geist, Geist_Mono, Public_Sans } from 'next/font/google';
import './globals.css';
import Providers from './provider';
import '@mantine/core/styles.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const geistPublicSans = Public_Sans({
	variable: '--font-public-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Vitals AI',
	description: 'Predict ',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${geistSans.variable} ${geistMono.variable} ${geistPublicSans.variable} h-full antialiased`}
		>
			<body className='min-h-full flex flex-col'>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
