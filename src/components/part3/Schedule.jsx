const Schedule = () => {
  const data = [
    {
      image:
        "https://i.postimg.cc/Hs6pLHcM/a324be6db5143e27048545a746e922f2.png",
      time: "08:30:00",
      sport: "Golf",
      event: "Men's Individual",
      round: "Round 3",
      venue: "Indira Gandhi International Sports Stadium",
    },
    {
      image:
        "https://i.postimg.cc/Hs6pLHcM/a324be6db5143e27048545a746e922f2.png",
      time: "09:15:00",
      sport: "Football",
      event: "Men's Team",
      round: "League",
      venue: "Haldwani Sports Stadium",
    },
    {
      image:
        "https://i.postimg.cc/Hs6pLHcM/a324be6db5143e27048545a746e922f2.png",
      time: "10:30:00",
      sport: "Judo",
      event: "Women's 48kg",
      round: "Elimination",
      venue: "Indira Gandhi International Sports Stadium",
    },
    {
      image:
        "https://i.postimg.cc/Hs6pLHcM/a324be6db5143e27048545a746e922f2.png",
      time: "07:00:00",
      sport: "Golf",
      event: "Women's 48kg",
      round: "Elimination",
      venue: "Haldwani Sports Stadium",
    },
    {
      image:
        "https://i.postimg.cc/Hs6pLHcM/a324be6db5143e27048545a746e922f2.png",
      time: "10:30:00",
      sport: "Judo",
      event: "Women's 48kg",
      round: "Elimination",
      venue: "Indira Gandhi International Sports Stadium",
    },
  ];

  return (
    <div className="container mx-auto p-16 rounded-tr-[150px]">
      <div className=" flex justify-between">
      <h1 className="text-4xl font-bold text-purple-700 mb-4 ">
        SCHEDULE
      </h1>
      <div className="flex justify-end mb-4">
        <select className="border rounded-lg p-2 mr-2 text-xs">
          <option className="w-20 text-xs">Select Date...</option>
          {/* Add options here */}
        </select>
        <select className="border rounded-lg p-2 text-xs">
          <option className="w-20 text-xs">All Games</option>
          {/* Add options here */}
        </select>
      </div>
      </div>
      <div className="overflow-x-auto rounded-t-lg">
        <table className="w-full border-collapse ">
          <thead>
            <tr className="bg-[#81378F] text-white text-left">
              <th className="p-2">Icon</th>
              <th className="p-2">Time</th>
              <th className="p-2">Sports</th>
              <th className="p-2">Events</th>
              <th className="p-2">Round/Pool</th>
              <th className="p-2">Venue</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-white ">
                <td className="p-2">
                  <img src={item.image} alt="icon" className="w-20 lg:h-20 h-14" />
                </td>
                <td className="p-2">{item.time}</td>
                <td className="p-2">{item.sport}</td>
                <td className="p-2">{item.event}</td>
                <td className="p-2">{item.round}</td>
                <td className="p-2">{item.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
