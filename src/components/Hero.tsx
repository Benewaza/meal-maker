import Search from "./Search";
import Nav from "./Nav";
const Hero = () => {
  return (
    <header className="container mx-auto p-4">
      <Nav />
      <div className="py-20 md:py-44">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl font-bold text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <div className="mt-12 w-full">
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
