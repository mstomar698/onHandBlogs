'use client';
import { Inter } from 'next/font/google';
import { Footer, Navbar } from './components';
import { Main } from './blog/main';
import { Form } from './form/form';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <body className="backdrop-blur-xl bg-white/30">
      <div>
        <Navbar />
        {/* form-data section here */}
        <h1 className="text-purple-700 text-3xl my-4 text-center w-full bg-transparent underline font-bold items-center">
          Form for Blog
        </h1>
        <Form />
        {/* form-data section here */}
        {/* The review blog is here */}
        <h1 className="text-purple-700 text-3xl my-4 text-center w-full bg-transparent underline font-bold items-center">
          Preview of Blog
        </h1>
        {/* <Main details={'some text'} /> */}
        {/* The review blog is here */}
        <Footer />
      </div>
    </body>
  );
}
