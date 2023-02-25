import { useState } from 'react';
import MenuIcon from './file.png';
import CloseIcon from './cross.png';
import Image from 'next/image';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-row border-4 border-solid rounded-lg justify-between  border-red-500 mx-auto sm:mx-4 lg:mx-16 h-full p-1">
      <div className="flex justify-center items-center w-full text-center ">
        <a href="/" className="flex items-center w-4/5">
          <span className="text-xl font-bold w-full text-green-400 ">
            Mayank's Travel Blog
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
          <a
            href="/"
            className="block text-purple-400 text-lg hover:text-white mb-2"
          >
            Gallery
          </a>
          <a
            href="/"
            className="block text-purple-400 text-lg hover:text-white mb-2"
          >
            Contact
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
              <Image src={MenuIcon} alt="Open menu" className="w-6 h-6 " />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col justify-center md:hidden fixed  lg:relative -top-0 -right-0 w-full h-screen overflow-hidden backdrop-blur-xl bg-black/80 items-center">
          <a
            title="cross"
            href="/"
            className="block text-blue-700 hover:text-white mb-2 items-center"
          >
            <Image src={CloseIcon} alt="Close menu" className="w-6 h-6" />
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
        </div>
      )}
    </div>
  );
};

// // // // export const Navbar = () => {
// // // //   return (
// // // //     // <div className="flex flex-row border-4 border-solid rounded-lg justify-between  border-red-500 mx-auto sm:mx-4 lg:mx-16 h-full">
// // // //     //   {/* <div className="font-bold text-xl uppercase text-center w-4/5">
// // // //     //     Mayank's Travel Blog
// // // //     //   </div>
// // // //     //   <div className="font-bold text-blue-300 text-xl uppercase w-1/5 items-end text-end">
// // // //     //     navbar navbar
// // // //     //   </div> */}

// // // //     // </div>
// // // //     <nav className="bg-gray-800 px-4 py-2">
// // // //       <div className="flex items-center justify-between">
// // // //         <a className="text-white font-bold text-xl" href="#">
// // // //           Logo
// // // //         </a>
// // // //         <button
// // // //           title="btn"
// // // //           className="text-gray-400 hover:text-white lg:hidden"
// // // //         >
// // // //           <svg className="fill-current h-6 w-6" viewBox="0 0 24 24">
// // // //             <path d="M4 6h16M4 12h16M4 18h16"></path>
// // // //           </svg>
// // // //         </button>
// // // //       </div>
// // // //       <div className="hidden lg:flex lg:items-center lg:w-auto">
// // // //         <div className="text-sm lg:flex-grow">
// // // //           <a
// // // //             href="#"
// // // //             className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
// // // //           >
// // // //             Link 1
// // // //           </a>
// // // //           <a
// // // //             href="#"
// // // //             className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
// // // //           >
// // // //             Link 2
// // // //           </a>
// // // //           <div className="relative mt-4 lg:inline-block lg:mt-0">
// // // //             <button className="text-white hover:text-gray-400 focus:outline-none">
// // // //               Dropdown
// // // //             </button>
// // // //             <div className="absolute z-10 hidden bg-gray-800 text-white py-2 mt-2 w-32 rounded-lg shadow-lg">
// // // //               <a href="#" className="block px-4 py-2 hover:bg-gray-700">
// // // //                 Option 1
// // // //               </a>
// // // //               <a href="#" className="block px-4 py-2 hover:bg-gray-700">
// // // //                 Option 2
// // // //               </a>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // };
// // // // navabr starts here

// // // 'use client';
// // // import React, { useState } from 'react';
// // // import { Disclosure, Menu, Transition } from '@headlessui/react';
// // // import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/24/solid';

// // // const navigation = [
// // //   { name: 'Home', href: '#' },
// // //   { name: 'About', href: '#' },
// // //   { name: 'Contact', href: '#' },
// // //   { name: 'Blog', href: '#' },
// // // ];

// // // function classNames(...classes: string[]) {
// // //   return classes.filter(Boolean).join(' ');
// // // }

// // // const Navbar: React.FC = () => {
// // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// // //   return (
// // //     <Disclosure as="nav" className="bg-transparent">
// // //       {({ open }) => (
// // //         <>
// // //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //             <div className="flex items-center justify-between h-16">
// // //               <div className="flex items-center">
// // //                 <div className="flex-shrink-0">
// // //                   <a href="#" className="text-white font-bold text-xl">
// // //                     Logo
// // //                   </a>
// // //                 </div>
// // //                 <div className="hidden md:block ml-10 flex items-baseline space-x-4">
// // //                   {navigation.map((item) => (
// // //                     <a
// // //                       key={item.name}
// // //                       href={item.href}
// // //                       className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // //                     >
// // //                       {item.name}
// // //                     </a>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //               <div className="-mr-2 flex md:hidden">
// // //                 <Disclosure.Button
// // //                   className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
// // //                   onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// // //                 >
// // //                   <span className="sr-only">Open main menu</span>
// // //                   {open ? (
// // //                     <XIcon className="block h-6 w-6" aria-hidden="true" />
// // //                   ) : (
// // //                     <MenuIcon className="block h-6 w-6" aria-hidden="true" />
// // //                   )}
// // //                 </Disclosure.Button>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <Disclosure.Panel className="md:hidden">
// // //             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
// // //               {navigation.map((item) => (
// // //                 <a
// // //                   key={item.name}
// // //                   href={item.href}
// // //                   className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
// // //                 >
// // //                   {item.name}
// // //                 </a>
// // //               ))}
// // //             </div>
// // //           </Disclosure.Panel>
// // //         </>
// // //       )}
// // //     </Disclosure>
// // //   );
// // // };

// // // export default Navbar;
// // 'use client';
// // import { useState } from 'react';
// // import { FiMenu } from 'react-icons/fi';

// // const Navbar = () => {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   const toggleMobileMenu = () => {
// //     setIsMobileMenuOpen(!isMobileMenuOpen);
// //   };

// //   return (
// //     <nav className="bg-transparent fixed w-full z-50">
// //       <div className="max-w-6xl mx-auto px-4">
// //         <div className="flex justify-between">
// //           <div className="flex space-x-4 items-center">
// //             <a href="/" className="text-lg font-semibold text-white">
// //               Logo
// //             </a>

// //             <div className="hidden md:flex space-x-4">
// //               <a href="/" className="text-gray-300 hover:text-white">
// //                 Home
// //               </a>
// //               <a href="/" className="text-gray-300 hover:text-white">
// //                 About
// //               </a>
// //               <a href="/" className="text-gray-300 hover:text-white">
// //                 Contact
// //               </a>
// //             </div>
// //           </div>

// //           <div className="flex md:hidden items-center">
// //             <button
// //               type="button"
// //               className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
// //               aria-label="Toggle menu"
// //               onClick={toggleMobileMenu}
// //             >
// //               {isMobileMenuOpen ? (
// //                 <FiMenu className="w-6 h-6" />
// //               ) : (
// //                 <FiMenu className="w-6 h-6" />
// //               )}
// //             </button>
// //           </div>
// //         </div>

// //         {/* Mobile menu */}
// //         {isMobileMenuOpen && (
// //           <div className="md:hidden mt-2">
// //             <a href="/" className="block text-gray-300 hover:text-white mb-2">
// //               Home
// //             </a>
// //             <a href="/" className="block text-gray-300 hover:text-white mb-2">
// //               About
// //             </a>
// //             <a href="/" className="block text-gray-300 hover:text-white mb-2">
// //               Contact
// //             </a>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // 'use client';
// import { useState } from 'react';
// import SvgComponent from '../../assets/cross.jsx';
// // import { ReactComponent as CloseIcon } from '../../assets/cross.jsx';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="fixed w-full z-50 bg-transparent">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between items-center">
//           <a href="/" className="text-lg font-semibold text-white">
//             Logo
//           </a>

//           <button
//             type="button"
//             className="md:hidden text-gray-400 hover:text-white focus:outline-none focus:text-white"
//             aria-label="Toggle menu"
//             onClick={toggleMobileMenu}
//           >
//             {isMobileMenuOpen ? (
//               <SvgComponent className="w-6 h-6" />
//             ) : (
//               <SvgComponent className="w-6 h-6" />
//             )}
//           </button>

//           <div className="hidden md:flex space-x-4">
//             <a href="/" className="text-gray-300 hover:text-white">
//               Home
//             </a>
//             <a href="/" className="text-gray-300 hover:text-white">
//               About
//             </a>
//             <a href="/" className="text-gray-300 hover:text-white">
//               Contact
//             </a>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden mt-2">
//             <a href="/" className="block text-gray-300 hover:text-white mb-2">
//               Home
//             </a>
//             <a href="/" className="block text-gray-300 hover:text-white mb-2">
//               About
//             </a>
//             <a href="/" className="block text-gray-300 hover:text-white mb-2">
//               Contact
//             </a>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
