const sponsors = [
  {
    title: "GAMES PARTNERS",
    logos: [
      {
        src: "https://i.postimg.cc/tJSxf5Zm/06d915d8019c32de5763ef2460ea5e1f-1.png",
        alt: "Logo 1",
      },
      {
        src: "https://i.postimg.cc/FRPzsKrY/99b4d8728e64ad273c204a5e0a01614f.png",
        alt: "Logo 2",
      },
      {
        src: "https://i.postimg.cc/T1MdPW8Y/ece663b27d37d72093275b175fa36ece.png",
        alt: "Logo 3",
      },
      {
        src: "https://i.postimg.cc/T1VR5YGj/5f2635320eb3d99c62725f5e8a6f12ff.png",
        alt: "Logo 4",
      },
    ],
  },
  {
    title: "SUPPORTED BY",
    logos: [
      { src: "https://i.postimg.cc/GtXGz2zR/1361862.png", alt: "Logo 5" },
      { src: "https://i.postimg.cc/GtXGz2zR/1361862.png", alt: "Logo 6" },
      { src: "https://i.postimg.cc/GtXGz2zR/1361862.png", alt: "Logo 7" },
    ],
  },
  {
    title: "ASSOCIATE SPONSORS",
    logos: [
      { src: "https://i.postimg.cc/GtXGz2zR/1361862.png", alt: "Logo 8" },
      { src: "https://i.postimg.cc/GtXGz2zR/1361862.png", alt: "Logo 9" },
      { src: "https://i.postimg.cc/GtXGz2zR/1361862.png", alt: "Logo 10" },
      { src: "https://i.postimg.cc/GtXGz2zR/1361862.png", alt: "Logo 11" },
    ],
  },
  {
    title: "PARTNERS",
    logos: [
      { src: "https://i.postimg.cc/GtXGz2zR/1361862.png", alt: "Logo 8" },
      { src: "https://i.postimg.cc/GtXGz2zR/1361862.png", alt: "Logo 9" },
      { src: "https://i.postimg.cc/GtXGz2zR/1361862.png", alt: "Logo 10" },
      { src: "https://i.postimg.cc/GtXGz2zR/1361862.png", alt: "Logo 11" },
    ],
  },
  {
    title: "BROADCAST PARTNERS",
    logos: [
      { src: "https://i.postimg.cc/GtXGz2zR/1361862.png", alt: "Logo 8" },
      { src: "https://i.postimg.cc/GtXGz2zR/1361862.png", alt: "Logo 9" },
    ],
  },
];

const Sponsors = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      {sponsors.map((section, index) => (
        <div key={index} className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            {section.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-5">
            {section.logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center m-4 bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-28 h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
