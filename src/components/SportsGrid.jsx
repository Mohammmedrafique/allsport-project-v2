const SportsGrid = () => {
  const imageUrl =
    "https://i.postimg.cc/26QXcNVz/d78db51707973d1f68918edf948483e2-1.png";
  const sports = new Array(12).fill("ARCHERY");

  return (
    <div className="py-10 bg-[#E1E1E1]">
      <div className="bg-white rounded-tr-[150px] p-10">
        <div className="flex justify-between mt-6">
          <h1 className="text-4xl font-bold text-purple-700 mb-6">SPORTS</h1>
          <button className="bg-purple-700 text-white px-2 py-2 rounded-3xl shadow-md hover:bg-purple-600 transition mb-4">
            VIEW MORE
          </button>
        </div>
        <div className="grid lg:grid-cols-6 grid-cols-4 gap-5 ">
          {sports.map((sport, index) => (
            <div
              key={index}
              className="bg-purple-700 rounded-3xl shadow-lg overflow-hidden lg:w-35 lg:h-44"
              // Adjust width and height here
            >
              <img
                src={imageUrl}
                alt={sport}
                className="w-full  object-cover" 
              />
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2">
                {/* <p className="text-center text-white font-semibold">{sport}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsGrid;
