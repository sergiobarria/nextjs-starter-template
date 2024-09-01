export default async function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex min-h-screen flex-col bg-white">
			<main className="flex-1">{children}</main>
		</div>
	);
}
