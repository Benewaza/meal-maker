import logo from "../assets/react.svg";

const Nav = () => {
  return (
    <nav>
      <div className="p-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-700 px-3 py-2 text-lg font-semibold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-700 px-3 py-2 text-lg font-semibold"
                >
                  About
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="bg-purple-600 text-white px-3 py-2 text-md font-semibold hover:bg-white hover:text-black transition duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
