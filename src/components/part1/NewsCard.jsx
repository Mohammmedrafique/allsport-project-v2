// NewsCard.js

import PropTypes from "prop-types";

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white rounded-lg shadow-[rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;] p-4 flex">
      <img src={news.imge} className="size-4 w-5 image " />
      <h2 className="text-xl font-bold mb-2">{news.title}</h2>
      <p className="text-gray-700">{news.content}</p>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imge: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsCard;
