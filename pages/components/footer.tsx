import Image from 'next/image';
import Icon from './cross.png';
export const Footer = () => {
  return (
    <div className="flex flex-row max-sm:flex-col mt-8 bg-gray-800 items-start border-4 border-solid rounded-t-lg border-red-500 mx-auto sm:mx-4 lg:mx-16 h-full">
      <div className="w-1/5 max-sm:w-full h-full mt-2 md:m-4 lg:m-4 lg:text-3xl  items-center text-center">
        <span className="texl-lg text-purple-400 text-center justify-around">
          Blog by{' '}
          <span className="text-xl text-purple-700 underline">mstomar698</span>
        </span>
      </div>
      <div className="w-4/5 max-sm:w-full h-full items-center justify-between p-2 m-1 max-sm:m-0">
        <ul className=" flex flex-row text-lg p-1 text-purple-400 text-left justify-between items-end bg-black h-full border-solid border-4 border-black rounded-lg">
          <li>
            {' '}
            <Image src={Icon} alt="v1" height={40} width={40} />
          </li>
          <li>
            {' '}
            <Image src={Icon} alt="v1" height={40} width={40} />
          </li>
          <li>
            {' '}
            <Image src={Icon} alt="v1" height={40} width={40} />
          </li>
          <li>
            {' '}
            <Image src={Icon} alt="v1" height={40} width={40} />
          </li>
          <li>
            {' '}
            <Image src={Icon} alt="v1" height={40} width={40} />
          </li>
        </ul>
      </div>
    </div>
  );
};
