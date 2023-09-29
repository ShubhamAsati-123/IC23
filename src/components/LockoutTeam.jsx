import Card from "./InfinityCards";
import { team,headteam } from "../assets/team";
const Team = () =>{
return( 
    <div className="  bg-gradient-to-b from-[#8B2828] to-[#322020] lg:bg-cover  text-white lg:h-screen lg:grid grid-cols-2" id="about">
        <img src="/images/LockoutTeam.png" alt="" className="p-20" />
        <div className="flex justify-center ">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-14 py-10 pb-4 lg:pt-16 lg:pb-0 ">
          {headteam.map((member) => {
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
     
        <div className="grid md:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-14 py-10 lg:py-16">
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
)
}

export default Team;