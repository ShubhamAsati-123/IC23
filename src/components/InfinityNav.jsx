import { Link } from "react-router-dom";

const InfinityNav = () => {
  return (
    <div>
      <nav className="fixed top-0 m-auto w-full flex justify-evenly py-6 bg-black">
        <div className="w-60"></div>
        <ul className="text-white flex gap-16 text-xl">
          <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
            <a href="/infinity#about">ABOUT</a>
          </li>
          <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
            <Link to="/infinity/bitlegion">BIT LEGION</Link>
          </li>
          <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
            <Link to="/infinity/team">TEAM</Link>
          </li>
          <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
            <Link to="/infinity/pastevents">PAST EVENTS</Link>
          </li>
          <li className="pb-2 hover:text-red-600 hover:border-b-2 border-red-600">
            <Link to="/infinity/halloffame">HALL OF FAME</Link>
          </li>
        </ul>
        <Link to="../infinity" className="right-0">
          <img
            src="/images/Infinity_logo.png"
            alt="Logo"
            width={175}
            className="right-0"
          />
        </Link>
      </nav>
    </div>
  );
};

export default InfinityNav;
