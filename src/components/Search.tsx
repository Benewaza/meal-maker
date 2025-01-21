import { FC, useState, ChangeEvent } from "react";

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>();

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log(searchTerm);
  };

  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search for something..."
        className="bg-gray-100 w-full max-w-[600px] text-black text-lg font-bold p-4 border-4 border-r-0 border-black focus:outline-none placeholder:text-gray-500"
        onChange={handleSearchInput}
      />
      <button
        type="button"
        onClick={handleSearch}
        className="bg-purple-600 text-white text-lg font-bold px-12 p-4 border-4 border-black hover:bg-white hover:text-black transition duration-200"
      >
        GO
      </button>
    </div>
  );
};

export default Search;
