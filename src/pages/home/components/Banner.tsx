const Banner = () => {
  return (
    <div className="banner p-5 md:h-[400px] h-[300px] flex items-center justify-center flex-col">
      <h1 className="md:text-[64px] text-4xl text-white font-bold mb-4">
        ICT Division
      </h1>
      <h2 className="text-2xl text-center font-semibold text-white">
        Government of the People's Republic of Bangladesh
      </h2>
      <div className="mt-5">
        <input
          type="text"
          placeholder="Query..."
          className="h-[40px] md:w-[280px] px-4 py-1 focus-visible:outline-primary-foreground "
        />
        <button
          type="submit"
          className="h-[40px] font-semibold text-white w-[120px] bg-primary"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
