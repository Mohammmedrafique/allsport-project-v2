import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const SocialFollow = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white py-10 pl-20 rounded-lg shadow-lg">
      <div className="mb-4 md:mb-0 flex-1 p-20">
        <h2 className="text-6xl font-bold text-purple-700 mb-20">FOLLOW US</h2>
        <div className="flex space-x-4">
          <Twitter className="text-gray-600" />
          <Facebook className="text-gray-600" />
          <Instagram className="text-gray-600" />
          <Linkedin className="text-gray-600" />
        </div>

        <p className="mt-2 text-sm text-gray-600">#UTTARAKHANDGAMES2024</p>
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-end">
        <img
          src="https://i.postimg.cc/2yhPg13s/90b882c68b102947b197c37e73de18db.png"
          alt="Athlete"
          className="w-full md:w-auto rounded-tr-[150px] shadow-lg object-cover h-64 md:h-auto"
        />
      </div>
    </div>
  );
};

export default SocialFollow;
