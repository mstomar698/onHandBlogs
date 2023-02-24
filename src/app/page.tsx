'use client';
import { Inter } from 'next/font/google';
import { Footer, Navbar} from './components';
import { Main } from './blog/main';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <body>
      <Navbar />
      <Main details={'some text'} />
      <Footer />
    </body>
  );
}
