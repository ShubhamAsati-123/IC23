import LockoutNav from '../components/LockoutNav';
import LockoutAbout from '../components/LockoutAbout';

const Lockout = () => {
  return (
      <div className="lg:bg-[url('/images/lockoutRedbg.png')] bg-gradient-to-b from-[#8B2828] to-[#322020] h-full lg:bg-cover  lg:h-screen  bg-no-repeat bg-center ">
      <div className="">
      <LockoutNav />
      <div className="lg:hidden">
        <img src="/images/lockoutlogo.png" alt="" />
      </div>
      <div className="text-white flex justify-center lg:pt-80 lg:mt-[40vh] lg:pb-[3.5rem] lg:p-0 p-24">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScAr32xvlkGK7EZxsp3RU0Ix-r2RgiDjX8sWcrX4JoWJ5VYlw/viewform"
            target="_blank"
            rel="noopener"
            >
            <h1 className="border-8 border-white px-5 lg:px-12 py-2 lg:py-3  text-4xl lg:text-5xl md:text-5xl hover:bg-white hover:text-black  font-captainamerica">
              {/* <span className='hover:[text-shadow: 2px 2px 5px grey;]'> */}
                Register
                {/* </span> */} 
                
            </h1>
          </a>
        </div>
            <div className="lg:hidden h-[16vh] "> 
            </div>
      <LockoutAbout/>
      </div>
      
      
    </div>
  )
}

export default Lockout
