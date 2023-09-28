import { useState } from "react"

const LockoutNav =()=>{

    
    return(<div className="text-2xl text-white font-miso font-thin bg-transparent p-4 flex justify-center space-x-28 tracking-widest">
    <a href="/lockout" className="hover:text-lockoutPink hover:underline hover:underline-offset-2" >
    <div>HOME</div>
    </a>
    <a href="/infinity/bitlegion" className="hover:text-lockoutPink hover:underline hover:underline-offset-2">
    <div>BIT LEGION</div>
    </a>
    <a href="/infinity/team" className="hover:text-lockoutPink hover:underline hover:underline-offset-2">
    <div>TEAM</div>
    </a>
</div>)
}


export default LockoutNav