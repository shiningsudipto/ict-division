const Banner = () => {
  return (
    <div className="banner flex items-center justify-center flex-col">
      <h1 className="text-[64px] text-white font-bold">ICT Division</h1>
      <h2 className="text-2xl font-semibold text-white">
        Government of the People's Republic of Bangladesh
      </h2>
      <div className="mt-5">
        <input
          type="text"
          placeholder="Query..."
          className="h-[40px] w-[280px] px-4 py-1"
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
