/* eslint-disable react/jsx-no-target-blank */
// eslint-disable-next-line no-shadow-restricted-names

import { BsFillCalendarFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

const Infinity = () => {
  return (
    <div className="bg-black h-screen">
      <nav className="flex justify-center py-6">
        <ul className="text-white flex gap-16 text-xl">
          <li className="hover:text-red-600">BIT LEGION</li>
          <li className="hover:text-red-600">TEAM</li>
          <li className="hover:text-red-600">PAST EVENTS</li>
          <li className="hover:text-red-600">HALL OF FAME</li>
        </ul>
      </nav>
      <div className="flex justify-center m-20 items-center">
        <img src="./images/Infinity_logo.png" alt="Infinity Logo" width={832} />
      </div>
      <div className="text-white flex justify-center text-3xl font-miso">
        HOSTED ON &nbsp;
        <span className="font-nightcore">
          <a target="_blank" href="https://www.codechef.com/" rel="noopener">
            CODE <span className="text-red-600">CHEF</span>
          </a>
        </span>{" "}
        &nbsp;
        <a
          target="_blank"
          href="https://www.codechef.com/START105"
          rel="noopener"
        >
          ( AS STARTERS 105 )
        </a>
      </div>
      <div className="text-white flex justify-center text-3xl font-miso m-3">
        <div className="flex items-center justify-center h-10 ">
          <img src="./images/Calendar25.png" alt="25 Oct" width={50} />
        </div>
        OCT 25’ 2023 &nbsp;
        <img src="./images/Alarm.png" alt="25 Oct" width={50} />
        20:00 - 22:00
      </div>

      <div className="text-white flex justify-center m-10">
        <h1 className="border border-1 border-white px-14 py-5 rounded-2xl text-4xl font-nightcore">
          <a href="/Register">
            Register &nbsp; <span className="text-red-600">Now</span>
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Infinity;
