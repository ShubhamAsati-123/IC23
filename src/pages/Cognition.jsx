import CognitionNav from "../components/CognitionNav";

const Cognition = () => {
  return (
    <div className="bg-cognitionbg h-screen">
      <CognitionNav/>

      <div className="flex flex-col items-center">
        <div className=" -mt-5 flex flex-col z-10">
          <h1 className="text-10xl font-veterantypewriter text-center ">
            COGNITION
          </h1>
          <h2 className="text-4xl font-1942 text-right -mt-16">
            decode dazzle dominate
          </h2>
        </div>
        <img src="./images/cognition_bg.png" alt="bg" className="w-[54rem] -mt-10" />
      </div>

      <div className="flex justify-center items-center">
        <h1 className="font-punktypewriter border-2 border-black px-5 py-1 text-5xl rounded-lg tracking-wider">
          REGISTER
        </h1>
      </div>
    </div>
  );
};

export default Cognition;
