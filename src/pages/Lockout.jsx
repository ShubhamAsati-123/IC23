import LockoutNav from "../components/LockoutNav";
// bg-gradient-to-b from-[#8B2828] to-[#322020]
const Lockout = () => {
  return (
    <div
      style={{
        background: "url(/images/lockout_bg.png)",
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
      className="h-screen"
    >
      <LockoutNav />

      <div className="flex justify-center p-24">
        <img
          src="./images/lockout_logo.png"
          alt="lockoutlogo"
          className="w-192"
        />
      </div>

      <div className="flex justify-center items-center ">
        <a href="#">
        <h1 className="text-white font-captainamerica border-8 px-10 py-3 text-5xl border-white tracking-wider hover:bg-white hover:text-black">
          REGISTER
        </h1>
        </a>
      </div>
    </div>
  );
};

export default Lockout;
