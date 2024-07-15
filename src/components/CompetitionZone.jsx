import { ChevronDown, Pin } from "lucide-react";

const CompetitionZone = () => {
  return (
    <div className="  bg-[#E1E1E1] py-8">
      <div className="flex flex-col md:flex-row justify-between pl-8 bg-white">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center mb-8 md:mb-0 py-8">
          <h1 className="text-5xl font-bold text-purple-600 mb-8">
            COMPETITION ZONE
          </h1>
          <div className="rounded-lg shadow-lg overflow-hidden max-w-sm relative bg-[#FFDF8C]">
            <img
              src="https://i.postimg.cc/BvKKmq7K/6260dfc95197ff456a563b05f36c1719.png"
              alt="Delhi Stadium"
              className="w-full h-48 md:h-auto object-cover rounded-3xl"
            />

            <div className="p-4">
              <h2 className="text-3xl font-bold">DELHI</h2>
              <p className="text-gray-600 mt-2 text-sm bg-[#FFDF8C]">
                The Indira Gandhi Arena, formerly known as the Indraprastha
                Stadium, is located at the Indraprastha Estate in the eastern
                region of New Delhi. It is the largest indoor sports arena in
                India and among the largest in Asia.
              </p>
              <div className="mt-4 flex justify-between items-center">
                <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
                  EXPLORE
                </button>
                <div className="text-center">
                  <div className="text-gray-600 font-extrabold">1</div>
                  <div className="text-gray-600">VENUE</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div
            className="w-full h-80 md:h-full bg-cover bg-center rounded-lg overflow-hidden relative"
            style={{
              backgroundImage: `url('https://i.postimg.cc/BvKKmq7K/6260dfc95197ff456a563b05f36c1719.png')`,
            }}
          >
            <select className="absolute text-white top-4 left-4 p-2 border border-gray-300 rounded bg-transparent">
              <option>Select a country</option>
            </select>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-white text-xl bg-red-600 p-2 rounded">
                <Pin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionZone;
