/* eslint-disable react/jsx-key */
import InfinityNav from "./InfinityNav";
import Card from "./InfinityCards";
import { team } from "../assets/team";

const Infinityteam = () => {
  return (
    <div className="bg-black h-full">
      <InfinityNav />
      <div className="flex justify-center">
        <div className="grid grid-cols-3 justify-center items-center gap-14 py-24">
          {team.map((member) => {
            console.log(member);
            return (
              <Card
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
