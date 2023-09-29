import LockoutNav from "./LockoutNav";
const LockoutAbout = () =>{
    return(
        <div className=" bg-gradient-to-b from-[#8B2828] to-[#322020] h-screen lg:bg-[url('/images/lockoutbg.png')] lg:bg-cover lg:bg-no-repeat text-white lg:h-screen " >
            <LockoutNav/>
        <div className="grid grid-cols-2">

        <div className=" p-12">
        <img src="/images/aboutimage.png" alt="aboutimg" />
        </div>

        <div className="lg:text-4xl text-justify leading-relaxed p-20 font-miso ">
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Deserunt iusto ex veniam quaerat alias temporibus natus, ad dicta, porro cumque aliquid perspiciatis eius voluptatum commodi exercitationem dolorum eaque! <br /> Possimus quibusdam earum fuga! Delectus tenetur sint fugiat deserunt, minus reprehenderit quia quam ipsum accusantium unde magnam, aperiam sequi earum eos corrupti totam numquam maiores ipsam labore eligendi quisquam. Id, quae! Distinctio soluta at in et a nostrum, laborum rem beatae culpa delectus, impedit, animi id officia? Ipsam quaerat culpa dolor sed eius at optio voluptatibus non. Corporis voluptates aliquam iure architecto ratione fugiat! Sequi temporibus excepturi harum iste consectetur! Consectetur, sed.
        </p>
        </div>

        </div>
        
        </div>
    )
}
export default LockoutAbout;