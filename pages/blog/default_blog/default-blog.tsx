import Blog_bg from '../../../assets/galaxy-bg.jpg';
import Image from 'next/image';
import { Footer, Navbar } from '../../components';
import ContactForm from '../../components/contact-from';
import { person } from '../default-blog-data';

export const Default_Blog = () => {
  return (
    <div className="backdrop-blur-xl bg-white/30  p-4 border-4 border-solid border-red-500 ">
      {/**Add following for image OR blur-effect "backdrop-blur-xl bg-white/30 blog_body" */}
      {/* Navbar Section */}
      <Navbar person_details={person.name} />
      {/* Hero Section */}
      <div className="flex flex-row items-center justify-around mx-auto sm:mx-4 lg:mx-16 my-4 h-full border-4 border-solid border-blue-600 rounded-lg">
        <div className="flex w-full rounded-lg justify-around">
          <div className="flex flex-col item-center justify-around w-4/5 lg:w-3/5 max-sm:m-0 max-md:w-full sm:w-full max-sm:w-full bg-gray-800 p-4 rounded-l-lg">
            <div className="flex flex-col mb-2 h-full w-full">
              <span className="text-xl max-sm:text-xl text-purple-300">
                Welcome to{' '}
              </span>
              <span className="text-5xl max-sm:text-3xl uppercase lg:mt-1 text-purple-600 font-bold">
                {person.name}'s <br /> Travel Blog
              </span>
            </div>
            <div className="flex flex-row h-full mt-1 p-2 w-full">
              <div className="flex flex-col text-3xl max-sm:text-xl space-y-2 text-purple-700 w-3/5 h-full">
                About Me
                <ul className="text-md text-purple-400 text-xl text-left justify-between items-end bg-black h-full w-full space-y-0 border-solid border-4 border-black rounded-lg p-2">
                  <li>{person.about}</li>
                </ul>
              </div>
              <div className="flex flex-col text-3xl max-sm:text-xl p-8 max-sm:p-2 text-purple-700 w-3/5 h-full text-right">
                Current Tour
                <span className="text-3xl md:text-5xl h-full mt-2 lg:text-5xl border-2 border-solid border-green-400 overflow justify-end items-end text-purple-400 text-right  max-sm:px-4">
                  {person.place}
                </span>
              </div>
            </div>
          </div>
          <div className="blog_body w-1/5 lg:w-2/5 max-sm:hidden rounded-r-lg"></div>
        </div>
      </div>
      {/* Latest Travel Section */}
      <h1 className="text-purple-700 text-3xl text-center w-full bg-transparent underline font-bold items-center">
        Latest
      </h1>
      <div className="items-center justify-around mx-auto sm:mx-4 lg:mx-16 my-4 h-full border-4 border-solid border-blue-600 rounded-lg">
        <div className="flex flex-col rounded-lg bg-gray-800">
          <div className="w-full">
            <Image
              src={Blog_bg}
              alt="v1"
              height={1}
              width={9000}
              className="rounded-t-lg h-[500px] max-md:h-[400px] max-sm:h-[300px]"
            />
          </div>
          <div className="flex flex-col w-full items-center justify-between p-4">
            <span className="text-3xl maxc-sm:text-xl max-md:text-xl text-purple-700 font-bold uppercase lg:m-4">
              {person.place}
            </span>
            <ul className="text-md text-purple-400 text-left justify-between items-end bg-black h-full w-full p-2 space-y-2 border-solid border-4 border-black rounded-lg max-sm:p-4  max-sm:px-8 px-16 lg:p-8">
              {person.about}
              {person.about}
              {person.about}
              {person.about}
              {person.about}
              {person.about}
              {person.about}
              {person.about}
              {person.about}
              {person.about}
              {person.about}
              {person.about}
              {person.about}
            </ul>
          </div>
        </div>
      </div>
      {/* Stories Section */}
      <h1 className="text-purple-700 text-3xl text-center w-full bg-transparent underline font-bold items-center">
        Stories
      </h1>
      <div className="flex flex-row max-sm:flex-col justify-center p-4 items-center mx-auto sm:mx-4 lg:mx-16 my-4 h-full border-4 border-solid border-blue-600 rounded-lg">
        <div className="flex flex-col m-2">
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
              {person.about}
              {person.about}
              {person.about}
              {person.about}
              {person.about}
              {person.about}
            </ul>
          </div>
        </div>
        <div className="flex flex-col m-2">
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
              {person.about}
              {person.about}
              {person.about}
              {person.about}
              {person.about}
              {person.about}
            </ul>
          </div>
        </div>
      </div>
      {/* Video Gallery Section */}
      <h1 className="text-purple-700 text-3xl text-center w-full bg-transparent underline font-bold items-center">
        Gallery
      </h1>
      <div className="flex flex-row max-sm:flex-col  justify-center items-center mx-auto sm:mx-4 lg:mx-16 my-4 p-4 h-full border-4 border-solid border-blue-600 rounded-lg">
        <div className="flex flex-col w-full h-full m-1">
          <Image
            alt="v1"
            src={Blog_bg}
            height={100}
            width={3000}
            className="rounded-lg"
          />
          <span className="text-xl text-center text-purple-700 font-bold m-1">
            {person.twitter}
          </span>
        </div>
        <div className="flex flex-col w-full h-full m-1">
          <Image
            alt="v1"
            src={Blog_bg}
            height={100}
            width={3000}
            className="rounded-lg"
          />
          <span className="text-xl text-center text-purple-700 font-bold m-1">
            {person.instagram}
          </span>
        </div>
        <div className="flex flex-col w-full h-full m-1">
          <Image
            alt="v1"
            src={Blog_bg}
            height={100}
            width={3000}
            className="rounded-lg"
          />
          <span className="text-xl text-center text-purple-700 font-bold m-1">
            {person.instagram}
          </span>
        </div>
        <div className="flex flex-col w-full h-full m-1">
          <Image
            alt="v1"
            src={Blog_bg}
            height={100}
            width={3000}
            className="rounded-lg"
          />
          <span className="text-xl text-center text-purple-700 font-bold m-1">
            {person.twitter}
          </span>
        </div>
      </div>
      {/* Contact form Section */}
      <h1 className="text-purple-700 text-3xl text-center w-full bg-transparent underline font-bold items-center ">
        Conatct Form
      </h1>
      <div className="flex flex-row items-center justify-center h-full rounded-lg mx-auto sm:mx-4 lg:mx-16 my-4 max-sm:m-0 max-sm:my-4">
        <div className="flex w-full rounded-lg border-solid border-4 border-blue-600 justify-around ">
          <div className="border-solid border-4 border-green-600 rounded-lg w-4/5 max-sm:w-full  items-center m-4 z-10">
            <ContactForm />
          </div>
          <div className="blog_body w-1/5 max-sm:hidden rounded-r-lg"></div>
        </div>
      </div>
      {/* Footer Section */}
      <Footer
        person_details={person.name}
        twitter={person.twitter}
        instagram={person.instagram}
      />
    </div>
  );
};
