import InfinityNav from "./InfinityNav"
import Card from "./InfinityCards";
import { team } from "../assets/team";

const Infinityteam = () => {
  return (
    <div className="bg-black h-screen" >
      {/* <InfinityNav /> */}
      <div className="grid grid-rows-6 grid-flow-col gap-1">
      {team.map(member =>{
        console.log(member);
        return <Card name = {member.name.toUpperCase()} designation={member.designation.toUpperCase()} github={member.github} linkedin={member.linkedin} insta={member.insta}/>
      })}
      
      </div>
    </div>
  )
}

export default Infinityteam
