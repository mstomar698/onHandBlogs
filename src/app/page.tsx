'use client';
import { Inter } from 'next/font/google';
import { Footer, Navbar } from './components';
import { Main } from './blog/main';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <body className="backdrop-blur-xl bg-white/30">
      <Navbar />
      <h1 className="text-purple-700 text-3xl my-4 text-center w-full bg-transparent underline font-bold items-center">
        Preview of Blog
      </h1>
      <Main details={'some text'} />
      <Footer />
    </body>
  );
}
