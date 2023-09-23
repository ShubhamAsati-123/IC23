import { iiitp, india, world } from "../assets/Halloffame";
import HOFCard from "./HOFCard";
import InfinityNav from "./InfinityNav";

const InfinityHalloffame = () => {
  return (
    <div>
      <div className="bg-black h-full">
        <InfinityNav />

        <h1 className="text-white pt-24 text-9xl flex justify-center font-nightcore tracking-wider">
          HAll of &nbsp; <span className="text-red-600">F</span>Ame
        </h1>
        <div className="mt-20 relative">
          <div className="flex justify-center gap-72">
            <HOFCard title="INDIA #1" bgcolor="white" ccolor="black" data={india}/>
            <div className="absolute top-0 z-1">
              <HOFCard title="WORLD #1" bgcolor="red-600" ccolor="white" transy={true} data={world}/>
            </div>
            <HOFCard title="IIIT Pune #1" bgcolor="white" ccolor="black" data={iiitp}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfinityHalloffame;
