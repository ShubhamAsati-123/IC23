
const CognitionNav = () => {
  return (
    <div>
      <nav className="flex justify-center h-16 items-center">
        <ul className="flex gap-24 text-black font-miso text-3xl  ">
          <li className="hover:text-black border-b-2 border-transparent hover:border-b-2 hover:border-black cursor-pointer">
            ABOUT
          </li>
          <li className="hover:text-black border-b-2 border-transparent hover:border-b-2 hover:border-black cursor-pointer">
            Q-RIOCITY
          </li>
          <li className="hover:text-black border-b-2 border-transparent hover:border-b-2 hover:border-black cursor-pointer">
            GUIDELINE
          </li>
          <li className="hover:text-black border-b-2 border-transparent hover:border-b-2 hover:border-black cursor-pointer">
            GET IN TOUCH
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default CognitionNav
