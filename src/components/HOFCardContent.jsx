/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { SiCodechef } from "react-icons/si";


const HOFCardContent = ({ccolor, name, clg, year}) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex w-4/5 font-miso items-center">
          <SiCodechef
            color={ccolor ? ccolor : "White"}
            size={50}
            className="w-1/4"
          />
          <div className="w-2/4 gap-4">
            <h1 className=" text-4xl text-center">{name}</h1>
            <h1 className=" text-2xl text-center">{clg}</h1>
            <div className="flex gap-4 justify-center">
              <AiFillGithub color="black" size={25} />
              <AiFillLinkedin color="black" size={25} />
            </div>
          </div>
          <h1 className="w-1/4 text-7xl opacity-60">'{year}</h1>
        </div>
      </div>
    </div>
  );
};

export default HOFCardContent;
