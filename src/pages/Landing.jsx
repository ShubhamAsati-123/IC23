import About from "./About";
import Home from "./Home";

const Landing = () => {
  return (
    <div className="flex flex-nowrap h-screen w-[200%]">
        <Home />
        <About />
    </div>
  );
};

export default Landing;
