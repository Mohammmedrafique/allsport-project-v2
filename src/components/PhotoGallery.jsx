import { useState } from "react";

const photos = [
  "https://i.postimg.cc/65H04pGV/23ee7e60e0692388ce5b2ad0b760b8cc.png",
  "https://i.postimg.cc/65H04pGV/23ee7e60e0692388ce5b2ad0b760b8cc.png",
  "https://i.postimg.cc/65H04pGV/23ee7e60e0692388ce5b2ad0b760b8cc.png",
  "https://i.postimg.cc/65H04pGV/23ee7e60e0692388ce5b2ad0b760b8cc.png",
  "https://i.postimg.cc/65H04pGV/23ee7e60e0692388ce5b2ad0b760b8cc.png",
  "https://i.postimg.cc/65H04pGV/23ee7e60e0692388ce5b2ad0b760b8cc.png",
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < photos.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="bg-[#F3F4F6] ">
    <div className=" rounded-bl-[150px]  bg-white py-20">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-blue-900 text-start pl-24">
        Photo Gallery
      </h1>
      <div className="flex justify-start pl-24 mb-5">
        <button
          onClick={handlePrevious}
          className="bg-[#BB0490] text-white px-2 rounded-full mr-2"
          disabled={currentIndex === 0}
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          className="bg-[#BB0490] text-white p-2 w-20 rounded-3xl ml-2"
          disabled={currentIndex >= photos.length - 4}
        >
          {" "}
          &rarr;
        </button>
      </div>
      <div className="flex justify-center items-center mb-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.slice(currentIndex, currentIndex + 4).map((photo, index) => (
            <div
              key={index}
              className="w-48 h-48 sm:w-64 sm:h-64 bg-gray-200 rounded-lg"
            >
              <img
                src={photo}
                alt={`Photo ${currentIndex + index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <p className="text-center mt-2 text-sm sm:text-base hidden sm:block">
                Suasti Singh's gold powers Odisha past 50 medals
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default PhotoGallery;
