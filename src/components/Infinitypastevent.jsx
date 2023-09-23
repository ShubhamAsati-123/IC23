import InfinityNav from "./InfinityNav";
import { BiLinkExternal } from "react-icons/bi";

const Infinitypastevent = () => {
  return (
    <div className="bg-black h-full">
      <InfinityNav />
      <h1 className="text-white text-8xl pt-24 tracking-wide font-nightcore flex justify-center">
        PAST &nbsp; E<span className="text-red-600">V</span>ENTS
      </h1>
      <div className="flex justify-center">
        <div className="flex flex-col mt-10 w-2/3">
          <div className="border border-1 h-28 m-4 flex items-center justify-between px-10 rounded-lg">
            <h1 className="text-white text-7xl font-miso tracking-wider">
              INFINITY 2k2<span className="text-red-600">2</span>
            </h1>
            <a href="#">
              <div className="text-white text-3xl font-miso tracking-wider px-8 py-3 flex gap-2 items-center bg-red-600 rounded-xl">
                <h2>CONTEST LINK</h2>
                <BiLinkExternal />
              </div>
            </a>
          </div>

          <div className="border border-1 h-28 m-4 flex items-center justify-between px-10 rounded-lg">
            <a href="#">
              <div className="text-red-600 text-3xl font-miso tracking-wider px-8 py-3 flex gap-2 items-center bg-white rounded-xl">
                <h2>CONTEST LINK</h2>
                <BiLinkExternal />
              </div>
            </a>
            <h1 className="text-white text-7xl font-miso tracking-wider">
              INFINITY 2k2<span className="text-red-600">1</span>
            </h1>
          </div>

          <div className="border border-1 h-28 m-4 flex items-center justify-between px-10 rounded-lg">
            <h1 className="text-white text-7xl font-miso tracking-wider">
              INFINITY 2k2<span className="text-red-600">0</span>
            </h1>
            <a href="#">
              <div className="text-white text-3xl font-miso tracking-wider px-8 py-3 flex gap-2 items-center bg-red-600 rounded-xl">
                <h2>CONTEST LINK</h2>
                <BiLinkExternal />
              </div>
            </a>
          </div>

          <div className="border border-1 h-28 m-4 flex items-center justify-between px-10 rounded-lg">
            <a href="#">
              <div className="text-red-600 text-3xl font-miso tracking-wider px-8 py-3 flex gap-2 items-center bg-white rounded-xl">
                <h2>CONTEST LINK</h2>
                <BiLinkExternal />
              </div>
            </a>
            <h1 className="text-white text-7xl font-miso tracking-wider">
              INFINITY 2k1<span className="text-red-600">9</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infinitypastevent;
