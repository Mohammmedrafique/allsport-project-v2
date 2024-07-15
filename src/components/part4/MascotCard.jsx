const MascotCard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-red-100 p-16 rounded-lg shadow-md w-full">
      <div className="flex-1 lg:pr-8 bg-white h-96 p-16 rounded-tl-3xl rounded-bl-3xl">
        <h1 className="text-xl lg:text-xl font-bold text-purple-700 mb-2">
          HI!, I AM
        </h1>
        <h2 className="text-2xl lg:text-3xl font-bold text-purple-900 mb-4">
          THE
        </h2>
        <h2 className="text-2xl lg:text-3xl font-bold text-purple-900 mb-4">
          MASCOT
        </h2>
        <p className="text-gray-700 mb-4 text-xs text-justif ">
          Meet Himalayan Monal, the Mascot for the 38th National Games
          Uttarakhand 2024.
          <br /> Known as the Impeyan Monal, this bird is also the state bird of
          Uttarakhand.
        </p>
        <button className="bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-900 transition duration-300">
          MEET MASCOT
        </button>
      </div>
      <div className="flex-1 mt-8 lg:mt-0">
        <div className="bg-blue-200 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full"></div>
          </div>
          <img
            src="https://i.postimg.cc/QMF5mhWG/940d5a1328cdf640d14725059db0f661.png"
            alt="Background"
            className="w-screen h-96 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MascotCard;
