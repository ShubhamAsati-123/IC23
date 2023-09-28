import { useState } from "react"

const LockoutNav =()=>{

    
    return(<div className="text-2xl text-white font-miso  bg-transparent p-9 flex justify-center  sticky top-0 space-x-20 tracking-widest">
    <a href="#about" className=" hover:underline hover:underline-offset-2" >
    <div>ABOUT</div>
    </a> 
    <a href="/infinity/bitlegion" className=" hover:underline hover:underline-offset-2">
    <div>BIT LEGION</div>
    </a>
    <a href="/infinity/team" className="hover:underline hover:underline-offset-2">
    <div>TEAM</div>
    </a>
</div>)
}


export default LockoutNav