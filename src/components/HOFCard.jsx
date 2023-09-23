/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import HOFCardContent from "./HOFCardContent";


const HOFCard = ({ title, bgcolor, ccolor, transy, data}) => {
  return (
    <div>
      <div
        className={`bg-${bgcolor} w-80 h-128 mb-24 text-black rounded-3xl ${
          transy ? "-translate-y-5" : 0
        } shadow-lg shadow-gray-700/50`}
      >
        <h1 className="font-miso text-7xl flex justify-center">{title}</h1>
        
        {
            data.map((ele) => {
                return <HOFCardContent ccolor={ccolor} name={ele.name} clg={ele.clg} year={ele.year}/>
            })
        }
      </div>
    </div>
  );
};

export default HOFCard;
