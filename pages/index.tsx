import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Footer, Navbar } from './components';
import { Main } from './blog/main';
import { Form } from './form/form';
import clientPromise from '../lib/mongodb';
import { InferGetServerSidePropsType } from 'next';
import FormData from './data/formdata';

const inter = Inter({ subsets: ['latin'] });

export async function getServerSideProps(context: any) {
  try {
    await clientPromise;
    console.log('Connected to MongoDB');
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(isConnected);
  return (
    <>
      <Head>
        <title>onHandBlogs || Blogs</title>
        <meta
          name="description"
          content="Get Travel bloga created in an instant."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main_body backdrop-blur-xl bg-white/30">
        <div>
          <Navbar />
          {/* form-data section here */}
          <h1 className="text-purple-700 text-3xl my-4 text-center w-full bg-transparent underline font-bold items-center">
            Form for Blog
          </h1>
          <Form />

          {/* <h1 className="text-purple-700 text-3xl my-4 text-center w-full bg-transparent underline font-bold items-center">
            <FormData />
          </h1> */}

          {/* form-data section here */}
          {/* The review blog is here */}
          <h1 className="text-purple-700 text-3xl my-4 text-center w-full bg-transparent underline font-bold items-center">
            Preview of Blog
          </h1>
          <Main details={'some text'} />
          {/* The review blog is here */}
          <Footer />
        </div>
      </div>
    </>
  );
}
