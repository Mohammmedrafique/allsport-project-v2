const newsItems = [
  {
    id: 1,
    title: "Swasti Singh’s gold powers Odisha past 50 medals",
    description:
      "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh.",
    imageUrl:
      "https://i.postimg.cc/fW90ZTMq/63f38101e16cf54de75ff43a05e96e2e.png",
  },
  {
    id: 2,
    title: "Swasti Singh’s gold powers Odisha past 50 medals",
    description:
      "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh.",
    imageUrl:
      "https://i.postimg.cc/fW90ZTMq/63f38101e16cf54de75ff43a05e96e2e.png",
  },
  {
    id: 3,
    title: "Swasti Singh’s gold powers Odisha past 50 medals",
    description:
      "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh.",
    imageUrl:
      "https://i.postimg.cc/fW90ZTMq/63f38101e16cf54de75ff43a05e96e2e.png",
  },
  {
    id: 4,
    title: "Swasti Singh’s gold powers Odisha past 50 medals",
    description:
      "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh.",
    imageUrl:
      "https://i.postimg.cc/fW90ZTMq/63f38101e16cf54de75ff43a05e96e2e.png",
  },
  {
    id: 5,
    title: "Swasti Singh’s gold powers Odisha past 50 medals",
    description:
      "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh.",
    imageUrl:
      "https://i.postimg.cc/fW90ZTMq/63f38101e16cf54de75ff43a05e96e2e.png",
  },
  {
    id: 6,
    title: "Swasti Singh’s gold powers Odisha past 50 medals",
    description:
      "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh.",
    imageUrl:
      "https://i.postimg.cc/fW90ZTMq/63f38101e16cf54de75ff43a05e96e2e.png",
  },
  // Add more items as needed
];

const News = () => {
  return (
    <div className=" pt-16 px-20 pb-12">
      <h2 className="text-[#81378F] text-xl font-bold mb-4 font-[Montserrat]">Latest News</h2>
      <div className="grid lg:grid-cols-3 gap-4 ">
        {newsItems.map((item) => (
          <div key={item.id} className="flex p-2 border-l-[1px] border-[#959595]">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-24 h-20 mr-4 rounded"
            />
            <div>
              <h3 className="text-base font-bold">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
