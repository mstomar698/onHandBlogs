import Blog_bg from '../../../assets/galaxy-bg.jpg';
import Image from 'next/image';
import ContactForm from '../../components/contact-from';
import { useEffect, useState } from 'react';
import MenuIcon from '../../../assets/social-cons/menu.png';
import CloseIcon from '../../../assets/social-cons/cross.png';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import {person} from '../../../static/default_values';
import Icon from '../../../assets/social-cons/twit.png';
import Icon2 from '../../../assets/social-cons/inst.png';
import Icon3 from '../../../assets/social-cons/git.png';
import Icon4 from '../../../assets/social-cons/link.png';
import Icon5 from '../../../assets/social-cons/up.png';
import humanImage from '../../../assets/galaxy-bg.jpg';
import Default_Blog from '../default_blog/default-blog';

interface FormData {
  name: string;
  email: string;
  about: string;
  place: string;
  twitter: string;
  instagram: string;
}

/**
 * @param {any} details
 * @returns
 */
const Main_Comb = ({ details }: any) => {
  // NOTE: details_form_form will we used later to replace details dynamically.
  const details_from_form = details;
  const [formData, setFormData] = useState<FormData[]>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/formData');
      const data = await response.json();
      setFormData(data);
    }

    fetchData();
  }, []);

  if (!formData) {
    return setFormData(person);
  }
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // main Blog section
  return (
    <>
      {formData.map((person) => (
        <>
          {person.email === details_from_form ? (
            <>
              <h1 className="text-purple-700 text-3xl my-4 text-center w-full bg-transparent underline font-bold items-center">
                Live Preview
              </h1>
              <div className="backdrop-blur-xl bg-white/30 p-4 border-4 border-solid border-green-400 ">
                {/**Add following for image OR blur-effect "backdrop-blur-xl bg-white/30 blog_main_body" */}
                {/* Navbar Section */}
                <div
                  id="#navbar"
                  className="backdrop-blur-xl bg-white/30 flex flex-row border-4 border-solid rounded-lg justify-between border-red-500 mx-auto sm:mx-4 lg:mx-16 h-full p-1"
                >
                  <div className="flex justify-center items-center w-full text-center ">
                    <a href="/" className="flex items-center w-4/5">
                      <span className="text-xl font-bold w-full text-green-400 ">
                        {person.name}'s Travel Blog
                      </span>
                    </a>

                    <div className="hidden md:flex space-x-4 items-center justify-between mx-2 mt-1">
                      <a
                        href="/"
                        className="block text-purple-400 text-lg hover:text-white mb-2 "
                      >
                        Home
                      </a>
                      <a
                        href="/"
                        className="block text-purple-400 text-lg hover:text-white mb-2"
                      >
                        Latest
                      </a>
                      <a
                        href="/"
                        className="block text-purple-400 text-lg hover:text-white mb-2"
                      >
                        Stories
                      </a>
                      <a className="block text-purple-400 text-lg hover:text-white mb-2">
                        Gallery
                      </a>
                      <a
                        href="/"
                        className="block text-purple-400 text-lg hover:text-white mb-2"
                      >
                        Contact
                      </a>
                      <a>
                        <button
                          className="block border-solid bg-green-400 hover:bg-green-700 hover:text-red-400 border-green-600 border-2 rounded-lg p-0.5 text-purple-500 text-lg mb-2"
                          onClick={() => signOut()}
                        >
                          SignOut
                        </button>
                      </a>
                    </div>

                    <div className="md:hidden relative h-full flex items-center">
                      <button
                        type="button"
                        className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
                        aria-label="Toggle menu"
                        onClick={toggleMobileMenu}
                      >
                        {isMobileMenuOpen ? (
                          <Image
                            src={CloseIcon}
                            alt="Close menu"
                            className="w-6 h-6 fixed"
                          />
                        ) : (
                          <Image
                            src={MenuIcon}
                            alt="Open menu"
                            className="w-6 h-6 "
                          />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Mobile menu */}
                  {isMobileMenuOpen && (
                    <div className="flex flex-col justify-center md:hidden fixed  lg:relative -top-0 -right-0 w-full h-screen overflow-hidden backdrop-blur-xl bg-black  items-center">
                      <a
                        title="cross"
                        href="/"
                        className="block text-blue-700 hover:text-white mb-2 items-center"
                      >
                        <Image
                          src={CloseIcon}
                          alt="Close menu"
                          className="w-6 h-6"
                        />
                      </a>
                      <a
                        href="/"
                        className="block text-purple-700 text-lg hover:text-white mb-2"
                      >
                        Home
                      </a>
                      <a
                        href="/"
                        className="block text-purple-700 text-lg hover:text-white mb-2"
                      >
                        Latest
                      </a>
                      <a
                        href="/"
                        className="block text-purple-700 text-lg hover:text-white mb-2"
                      >
                        Stories
                      </a>
                      <a
                        href="/"
                        className="block text-purple-700 text-lg hover:text-white mb-2"
                      >
                        Gallery
                      </a>
                      <a
                        href="/"
                        className="block text-purple-700 text-lg hover:text-white mb-2"
                      >
                        Contact
                      </a>
                      <a>
                        <button
                          className="block border-solid bg-green-500 hover:bg-green-700 hover:text-red-400 border-green-600 border-2 rounded-lg p-0.5 text-purple-500 text-lg mb-2"
                          onClick={() => signOut()}
                        >
                          SignOut
                        </button>
                      </a>
                    </div>
                  )}
                </div>
                {/* Hero Section */}
                <div
                  id="#home"
                  className="flex flex-row items-center justify-around mx-auto sm:mx-4 lg:mx-16 my-4 h-full border-4 border-solid border-blue-600 rounded-lg"
                >
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
                    {/* <div className="blog_body w-1/5 lg:w-2/5 max-sm:hidden rounded-r-lg"></div> */}
                    <div
                      className="w-1/5 lg:w-2/5 max-sm:hidden rounded-r-lg bg-cover relative bg-center bg-black"
                      style={{
                        backgroundImage: `url(${humanImage})`,
                      }}
                    >
                      <div></div>
                    </div>
                  </div>
                </div>
                {/* Latest Travel Section */}
                <h1
                  id="#latest"
                  className="text-purple-700 text-3xl text-center w-full bg-transparent underline font-bold items-center"
                >
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
                <h1
                  id="#stories"
                  className="text-purple-700 text-3xl text-center w-full bg-transparent underline font-bold items-center"
                >
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
                <h1
                  id="#gallery"
                  className="text-purple-700 text-3xl text-center w-full bg-transparent underline font-bold items-center"
                >
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
                <h1
                  id="#contact"
                  className="text-purple-700 text-3xl text-center w-full bg-transparent underline font-bold items-center "
                >
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
                <div
                  id="#footer"
                  className="flex flex-row max-sm:flex-col mt-8 bg-gray-800 items-start border-4 border-solid rounded-t-lg border-red-500 mx-auto sm:mx-4 lg:mx-16 h-full"
                >
                  <div className="w-1/5 max-sm:w-full h-full mt-2 md:m-4 lg:m-4 lg:text-3xl  items-center text-center">
                    <span className="texl-lg text-purple-400 text-center justify-around">
                      Blog by{' '}
                      <span className="text-xl text-purple-700 underline truncate ">
                        {person.name}
                      </span>
                    </span>
                  </div>
                  <div className="w-4/5 max-sm:w-full h-full items-center justify-between p-2 m-1 max-sm:m-0">
                    <ul className=" flex flex-row text-lg p-1 text-purple-400 text-left justify-between items-end bg-black h-full border-solid border-4 border-black rounded-lg">
                      <li>
                        {' '}
                        <Link
                          className=""
                          href={`http://twitter.com/${person.twitter}`}
                        >
                          <Image src={Icon} alt="v1" height={40} width={40} />
                        </Link>
                      </li>
                      <li>
                        {' '}
                        <Link
                          className=""
                          href={`http://instagram.com/${person.instagram}`}
                        >
                          <Image src={Icon2} alt="v1" height={40} width={40} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          className=""
                          href={`http://github.com/mstomar698`}
                        >
                          <Image src={Icon3} alt="v1" height={40} width={40} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          className=""
                          href={`http://linkedin.com/${person.instagram}`}
                        >
                          <Image src={Icon4} alt="v1" height={40} width={40} />
                        </Link>
                      </li>
                      <li>
                        <Link className="" href="/">
                          <Image src={Icon5} alt="v1" height={40} width={40} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-purple-700 text-3xl my-4 text-center w-full bg-transparent underline font-bold items-center">
                Default Blog
              </h1>
              <Default_Blog />
            </>
          )}
        </>
      ))}{' '}
      && (
      <Default_Blog />)
    </>
  );
};
export default Main_Comb;
