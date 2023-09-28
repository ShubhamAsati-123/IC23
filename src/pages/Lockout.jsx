import LockoutNav from '../components/LockoutNav';
import LockoutAbout from '../components/LockoutAbout';
import LockoutMain from '../components/LockoutMain';
const Lockout = () => {
  return (
    <div className='bg-black  h-full'>
      <div className="bg-[url('/images/lockoutbg.png')] h-screen bg-no-repeat bg-center ">
      <LockoutNav/>
      <LockoutMain/>
      </div>
      <LockoutAbout/>
    </div>
  )
}

export default Lockout
