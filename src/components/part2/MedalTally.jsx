const medalData = [
  {
    rank: 1,
    state: "Maharashtra",
    gold: 80,
    silver: 69,
    bronze: 79,
    total: 228,
  },
  {
    rank: 2,
    state: "Services Sports Control Board",
    gold: 66,
    silver: 27,
    bronze: 33,
    total: 126,
  },
  { rank: 3, state: "Haryana", gold: 66, silver: 55, bronze: 75, total: 192 },
  {
    rank: 4,
    state: "Madhya Pradesh",
    gold: 37,
    silver: 36,
    bronze: 39,
    total: 112,
  },
  { rank: 5, state: "Kerala", gold: 36, silver: 24, bronze: 27, total: 87 },
];

const MedalTally = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row items-center bg-[#F3F3F3]  pl-20 pt-16 pb-5">
      <div className="w-full md:w-1/2 pr-20 md:pr-0">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <span role="img" aria-label="medal" className="mr-2">
            🏅
          </span>
          Medal Tally
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-[#F3F3F3]">
                <th className=" p-2"></th>
                <th className=" p-2"></th>
                <th className=" p-2">🥇</th>
                <th className=" p-2">🥈</th>
                <th className=" p-2">🥉</th>
                <th className=" p-2"></th>
              </tr>
            </thead>
            <tbody>
              {medalData.map((data, index) => (
                // <tr key={index} className="bg-[#F3F3F3]">
                <tr
                  key={index}
                  className={`${
                    index % 2 === 1 || index % 4 === 3
                      ? "bg-white"
                      : "bg-[#F3F3F3]"
                  }`}
                >
                  <td className=" p-2 text-center">{data.rank}</td>
                  <td className=" p-2">{data.state}</td>
                  <td className=" p-2 text-center">{data.gold}</td>
                  <td className=" p-2 text-center">{data.silver}</td>
                  <td className=" p-2 text-center">{data.bronze}</td>
                  <td className=" p-2 text-center">{data.total}</td>
                </tr>
              ))}
              <tr className="bg-white">
                <td colSpan="2" className="p-2 font-bold ">
                  Grand Total
                </td>
                <td className=" p-2 text-center font-bold">555</td>
                <td className=" p-2 text-center font-bold">546</td>
                <td className=" p-2 text-center font-bold">779</td>
                <td className=" p-2 text-center font-bold">1880</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex ">
          <button className="bg-purple-500 text-white py-2 px-4 rounded-full mx-2">
            Refresh
          </button>
          <button className="bg-gray-200 text-black py-2 px-4 rounded-full mx-2">
            View More
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0 flex-1 flex justify-end">
        <img
          src="https://i.postimg.cc/wjRzwnVP/de0054a6f79c3dc4f028aace21d7358e.png"
          alt="Athlete"
          className="rounded-tr-[150px] shadow-lg w-96"
        />
      </div>
    </div>
  );
};

export default MedalTally;
