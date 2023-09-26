/* eslint-disable react/jsx-key */
import InfinityNav from "./InfinityNav";
import Card from "./InfinityCards";
import { team } from "../assets/team";

const Infinityteam = () => {
  return (
    <div className="bg-black h-full">
      <InfinityNav />

      <h1 className="text-5xl text-white pt-24 lg:text-9xl flex justify-center font-nightcore tracking-wider">
        OUR T <span className="text-red-600">E</span>AM
      </h1>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-3 justify-center items-center gap-14 py-10 lg:py-16">
          {team.map((member) => {
            // console.log(member);
            return (
              <Card
                key={member.name}
                name={member.name.toUpperCase()}
                designation={member.designation.toUpperCase()}
                github={member.github}
                linkedin={member.linkedin}
                insta={member.insta}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Infinityteam;
