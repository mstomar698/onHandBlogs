import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Footer, Navbar } from './components';
import { Main } from './blog/main';
import { Form } from './form/form';
import clientPromise from '../lib/mongodb';
import { InferGetServerSidePropsType } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import { person } from './blog/default-blog-data';

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
  const { data: session } = useSession();
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
      <div className="backdrop-blur-xl bg-black/80">
        {!session ? (
          <div className="main_body h-screen w-full">
            <div className="text-center items-center justify-center m-64 max-md:m-12 max-md:mt-64 max-sm:m-12 max-sm:mt-64 bg-black p-4 border-4 border-solid rounded-lg border-red-500">
              <h1 className="text-purple-700 text-3xl my-4 text-center w-full bg-transparent font-bold items-center mt-8">
                Not signed in! 😥
              </h1>
              <br />
              <button
                className="border-solid border-green-600 border-4 text-red-600 text-center w-full rounded-t-lg p-1 bg-green-400 font-bold hover:bg-green-700 hover:text-red-400 text-3xl md:w-2/3 lg:w-1/2 mx-auto"
                onClick={() => signIn()}
              >
                Sign in
              </button>
            </div>
          </div>
        ) : (
          <div className="main_body backdrop-blur-xl bg-white/30">
            <div>
              <Navbar person_details={person.name} />
              <h1 className="text-purple-700 text-3xl my-4 text-center w-full bg-transparent underline font-bold items-center">
                Form for Blog
              </h1>
              <Form />
              
              <Main details={session.user!.email} />
              <Footer
                person_details={person.name}
                twitter={person.twitter}
                instagram={person.instagram}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
