import LockoutNav from './LockoutNav'
const Guide = ()=>{
    return(
        <div 
        className=" lg:bg-black lg:bg-[url('/images/lockoutbg.png')] lg:bg-cover lg:bg-no-repeat text-white  ">
            <LockoutNav/>
        <div className="grid grid-cols-2 h-full">
        <div className=''>
        <img src="/images/GuideText.png"  className="m-10"alt="" />
        <img src="/images/GuideLogo.png"  className="h-[50%] m-14"alt="" />
        </div>

        <div>
        <p className="text-miso text-3xl text-justify p-24">Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit. Molestiae rem esse dolorum eveniet necessitatibus inventore voluptatum minima nesciunt pariatur odio excepturi totam ipsam, molestias nulla obcaecati recusandae quisquam neque nam cumque. Quisquam aliquid consectetur animi voluptates cupiditate possimus dolore inventore accusamus nemo blanditiis a nostrum ducimus accusantium corrupti iusto modi facilis doloribus nesciunt sint repellendus earum, error amet! Maxime, omnis voluptate? Pariatur voluptates esse ullam in praesentium sint quo asperiores eius voluptatem quidem illum quasi eaque ipsam ad molestiae atque cumque temporibus fugit, molestias amet suscipit fuga eveniet hic aspernatur? Nam repellendus delectus possimus animi necessitatibus fuga aliquid! Inventore, veniam!</p>
        </div>

        </div>
        
    </div>)
}
export default Guide;