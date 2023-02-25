import Blog_bg from './bg-image.jpg';
import { Footer, Navbar } from '../components';
import Image from 'next/image';
import ContactForm from '../components/contact-from';

/**
 * @param {any} details
 * @returns
 */
export const Main = ({ details }: any) => {
  // NOTE: details_form_form will we used later to replace details dynamically.
  const details_from_form = details;
  return (
    <div className="blog_body p-4 border-4 border-solid border-green-400 backdrop-blur-xl bg-white/30">
      {/* Navbar Section */}
      <Navbar />
      {/* Hero Section */}
      <div className="flex flex-row items-center justify-around mx-auto sm:mx-4 lg:mx-16 my-4 h-full border-4 border-solid border-blue-600 rounded-lg">
        <div className="flex w-full rounded-lg border-solid border-4 border-blue-600 justify-around">
          <div className="flex flex-col item-center justify-around w-4/5 lg:w-3/5 max-sm:m-0 max-md:w-full sm:w-full max-sm:w-full bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-col mb-2 h-full w-full">
              <span className="text-xl max-sm:text-xl text-purple-300">
                Welcome to{' '}
              </span>
              <span className="text-5xl max-sm:text-3xl uppercase lg:mt-1 text-purple-600 font-bold">
                Mayank's Travel Blog
              </span>
            </div>
            <div className="flex flex-row h-full mt-1 p-2 w-full">
              <div className="flex flex-col text-3xl max-sm:text-xl space-y-2 text-purple-700 w-3/5 h-full">
                About Me
                <ul className="text-md text-purple-400 text-left justify-between items-end bg-black  h-full w-full space-y-0 border-solid border-4 border-black rounded-lg px-2">
                  <li>det1</li>
                  <li>det2</li>
                  <li>det3</li>
                  <li>det4</li>
                  <li>det5</li>
                  <li>det4</li>
                </ul>
              </div>
              <div className="flex flex-col text-3xl max-sm:text-xl space-y-2 text-purple-700 w-3/5 h-full text-right">
                Current Tour
                <span className="text-3xl max-md:5xl border-2 border-solid border-green-400 overflow justify-end items-end text-purple-400 text-right lg:text-7xl max-sm:px-4">
                  current tour location
                </span>
              </div>
            </div>
          </div>
          <div className="blog_body w-1/5 lg:w-2/5 max-sm:hidden"></div>
        </div>
      </div>
      {/* Latest Travel Section */}
      <h1 className="text-purple-700 text-3xl text-center w-full bg-transparent underline font-bold items-center">
        Latest
      </h1>
      <div className="flex flex-row max-sm:flex-col  items-center justify-around mx-auto sm:mx-4 lg:mx-16 my-4 h-full border-4 border-solid border-blue-600 rounded-lg">
        <div className="flex flex-col lg:flex-row item-center justify-around w-full bg-gray-800">
          <div className="flex flex-col text-3xl w-2/5 max-sm:w-full max-md:w-full h-full">
            <Image
              src={Blog_bg}
              alt="v1"
              height={1000}
              width={3030}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col w-3/5 max-sm:w-full max-md:w-full h-full items-center justify-between m-4 max-md:m-0 max-sm:m-0">
            <span className="text-xl text-purple-700 font-bold uppercase lg:mb-4">
              Place head
            </span>
            <ul className="text-md text-purple-400 text-left justify-between items-end bg-black  h-full w-full p-2 space-y-2 border-solid border-4 border-black rounded-lg max-sm:p-4 max-sm:px-8 px-16 lg:p-8">
              <li>det1</li>
              <li>det2</li>
              <li>det3</li>
              <li>det4</li>
              <li>det5</li>
              <li>det4</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Stories Section */}
      <h1 className="text-purple-700 text-3xl text-center w-full bg-transparent underline font-bold items-center">
        Stories
      </h1>
      <div className="flex flex-row max-sm:flex-col  justify-center space-y-4 max-md:space-y-0 lg:space-y-0 p-4 space-x-4 max-sm:space-x-0 items-center mx-auto sm:mx-4 lg:mx-16 my-4 h-full border-4 border-solid border-blue-600 rounded-lg">
        <div className="flex flex-col">
          <Image
            alt="v1"
            src={Blog_bg}
            height={100}
            width={3000}
            className="rounded-lg "
          />
          <div className="flex flex-col w-full max-sm:w-full h-full items-center justify-between">
            <span className="text-xl text-purple-700 font-bold uppercase mt-1">
              Storie head
            </span>
            <ul className="text-md text-purple-400 text-left justify-between items-end bg-black  h-full w-full p-2 space-y-2 border-solid border-4 border-black rounded-lg px-4">
              <li>det1</li>
              <li>det2</li>
              <li>det3</li>
              <li>det4</li>
              <li>det5</li>
              <li>det4</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            alt="v1"
            src={Blog_bg}
            height={100}
            width={3000}
            className="rounded-lg"
          />
          <div className="flex flex-col w-full max-sm:w-full h-full items-center justify-between">
            <span className="text-xl text-purple-700 font-bold uppercase mt-1">
              Storie head
            </span>
            <ul className="text-md text-purple-400 text-left justify-between items-end bg-black  h-full w-full p-2 space-y-2 border-solid border-4 border-black rounded-lg px-4">
              <li>det1</li>
              <li>det2</li>
              <li>det3</li>
              <li>det4</li>
              <li>det5</li>
              <li>det4</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Video Gallery Section */}
      <h1 className="text-purple-700 text-3xl text-center w-full bg-transparent underline font-bold items-center">
        Gallery
      </h1>
      <div className="flex flex-row max-sm:flex-col  justify-center space-y-2 space-x-4 max-md:space-y-0  max-sm:space-x-0 items-center mx-auto sm:mx-4 lg:mx-16 my-4 p-4 h-full border-4 border-solid border-blue-600 rounded-lg">
        <div className="flex flex-col w-full h-full">
          <Image
            alt="v1"
            src={Blog_bg}
            height={100}
            width={3000}
            className="rounded-lg"
          />
          <span className="text-xl text-center text-purple-700 font-bold m-1">
            Single Image
          </span>
        </div>
        <div className="flex flex-col w-full h-full">
          <Image
            alt="v1"
            src={Blog_bg}
            height={100}
            width={3000}
            className="rounded-lg"
          />
          <span className="text-xl text-center text-purple-700 font-bold m-1">
            Video details
          </span>
        </div>
        <div className="flex flex-col w-full h-full">
          <Image
            alt="v1"
            src={Blog_bg}
            height={100}
            width={3000}
            className="rounded-lg"
          />
          <span className="text-xl text-center text-purple-700 font-bold m-1">
            Video details
          </span>
        </div>
        <div className="flex flex-col w-full h-full">
          <Image
            alt="v1"
            src={Blog_bg}
            height={100}
            width={3000}
            className="rounded-lg"
          />
          <span className="text-xl text-center text-purple-700 font-bold m-1">
            Sinle Image
          </span>
        </div>
      </div>
      {/* Contact form Section */}
      <h1 className="text-purple-700 text-3xl text-center w-full bg-transparent underline font-bold items-center ">
        Conatct Form
      </h1>
      <div className="flex flex-row items-center justify-center h-full rounded-lg mx-auto sm:mx-4 lg:mx-16 my-4 max-sm:m-0 max-sm:my-4">
        <div className="flex w-full rounded-lg border-solid border-4 border-blue-600 justify-around ">
          <div className="border-solid border-4 border-green-600 rounded-lg w-4/5 max-sm:w-full  items-center m-4 z-10 ">
            <ContactForm />
          </div>
          <div className="blog_body w-1/5 max-sm:hidden"></div>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};
