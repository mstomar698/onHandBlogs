import '../styles/globals.css';

export const metadata = {
  title: 'onHandBlogs || Blogs',
  description: 'Get Travel bloga created in an instant.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
