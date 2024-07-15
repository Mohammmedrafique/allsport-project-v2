const stats = [
  { title: "ALL TOGETHER", value: "28", subtitle: "STATES" },
  {
    title: "COLLECTIVELY",
    value: "8 + 1",
    subtitle: "UNION TERRITORIES & CONTROL BOARDS",
  },
  { title: "WE ARE UNIFIED", value: "8000+", subtitle: "ATHLETES" },
  { title: "COMPETITION", value: "22", subtitle: "DAYS" },
  { title: "SERVICE", value: "4000", subtitle: "VOLUNTEERS" },
];

const Conversation = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white  pl-20 rounded-lg shadow-md">
      <div className="flex-1 lg:pr-8">
        <h1 className="text-sm  font-bold text-black mt-10 mb-5">Join the</h1>
        <h2 className="text-3xl lg:text-5xl font-bold text-purple-900 mb-4">
          CONVERSATION
        </h2>
        <h3 className="text-lg lg:text-xl text-black mb-6 ">
          #UTTRAKHANDGAMES2024
        </h3>
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-4  mb-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className=" p-4 bg-white rounded-lg border-r-[1px] border-b-[1px]"
            >
              <h4 className="text-lg font-bold text-gray-700 mb-20">
                {stat.title}
              </h4>
              <p className="text-2xl lg:text-3xl font-bold text-black">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-end sm:mb-5">
        <img
          src="https://i.postimg.cc/d1SXh8TP/097c7cec1a889a2da8ae957857275c59.png"
          alt="Athlete"
          className="w-full md:w-auto rounded-tr-[150px] shadow-lg object-cover h-64 md:h-auto "
        />
      </div>
    </div>
  );
};

export default Conversation;
