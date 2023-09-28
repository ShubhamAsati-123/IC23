import LockoutNav from "./LockoutNav";
const LockoutAbout = () =>{
    return(
        <div className=" bg-black text-white h-screen mt-36">

    <div className="font-newshape px-24" style={{"fontSize":"7rem"}}>
        ABOU<span className="text-lockoutPink">T</span>
    </div>

    <div className="text-3xl text-justify px-24 leading-relaxed grid gap-3">
        <p>
        Are you ready for the <span className="text-lockoutPink">most thrilling intellectual showdown</span>? Join us for the Lockout Tournament, where participants go head-to-head in a battle of wits like no other.
        </p>
        <p>
        <span className="font-bold">Race to Solve</span>: In this high-stakes competition, participants race to solve a series of challenging problems. The clock is ticking, and every second counts. Are you quick enough to outsmart your opponent?
        </p> 
        <p>
        <span className="font-bold">Point-Based Scoring</span>: The rules are simple but the competition is fierce. The first person to successfully solve a problem earns points for that particular challenge. Accumulate <span className="text-lockoutPink">points</span> to claim victory and prove your intellectual prowess.
        </p>
        <p>
        <span className="font-bold">Victory Awaits</span>: Only the best will triumph! The participant with the most points at the end of each round emerges as the victor. Do you have what it takes to be the ultimate problem-solving champion?
        </p>
        <p>
        <span className="font-bold">Average Time</span>: Each round is a thrilling <span className="text-lockoutPink">15-20 minute</span> battle of the minds. It's fast-paced, intense, and guaranteed to keep you on the edge of your seat.
        </p>
        <p>
        Don't miss your chance to showcase your intelligence, quick thinking, and problem-solving skills. Join us for the Lockout Tournament and experience the excitement of intellectual competition like never before. Your journey to victory starts here!
        </p>
    </div>

        
        </div>
    )
}
export default LockoutAbout;