import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0c2e5e] text-white pt-10 px-5">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/5 mb-5 md:mb-0">
            <div className="text-5xl font-bold mb-2">2024</div>
            <div className="text-lg font-semibold mb-5">Download the App</div>
            <div className="flex space-x-3 mb-5">
              <a href="#">
                <Twitter />
              </a>
              <a href="#">
                <Facebook />
              </a>
              <a href="#">
                <Instagram />
              </a>
              <a href="#">
                <Linkedin />
              </a>
            </div>
            <button className="bg-pink-600 text-white py-2 px-4 bottom-0 left-0 ">
              HELP LINE
            </button>
          </div>

          <div className="w-full md:w-1/5 mb-5 md:mb-0">
            <h3 className="font-bold mb-3">NATIONAL GAMES 2024</h3>
            <ul className="columns-2 md:columns-1 space-y-2 text-xs">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Schedule and Results
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Medal Tally
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Visit
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Teams
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Milestones
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Games Culture
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-5 md:mb-0">
            <h3 className="font-bold mb-3">SPORTS</h3>
            <ul className="columns-2 md:columns-1 space-y-2 text-xs">
              <li>
                <a href="#" className="hover:underline">
                  Aquatics
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Swimming
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Diving
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Water Polo
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Archery
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Athletics
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Badminton
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Basketball
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Boxing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Canoeing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Canoe - Sprint
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Canoe - Slalom
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kayaking
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Rowing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cycling
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  BMX
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Road Racing
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-5 md:mb-0">
            <h3 className="font-bold mb-3 text-[#0c2e5e]">SPORTS</h3>
            <ul className="columns-2 md:columns-1 space-y-2 text-xs">
              <li>
                <a href="#" className="hover:underline">
                  Sepaktakraw
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shooting
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shooting Rifle
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shooting Pistol
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shooting Shotgun
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Squash
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Taekwondo
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tennis
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Table Tennis
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Triathlon
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Volleyball
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Beach Volleyball
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Weightlifting
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Wrestling
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Wushu
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Synchronized Swimming
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-5 md:mb-0 ">
            <h3 className="font-bold mb-3">UKGOC INFO</h3>
            <p className="mb-2 text-xs">
              Director Sports, Sports Directorate, Uttarakhand
            </p>
            <p className="mb-2 text-xs">
              Maharana Pratap Sports College Campus, Raipur, Dehradun
            </p>
            <p className="mb-2 text-xs">Pin - 248008</p>
            <p className="mb-2 text-xs">Ph: 0135-2781414</p>
            <p className="mb-2 text-xs">Email: uk.directorsports@gmail.com</p>
            <div className="text-lg font-semibold mb-5">Download the App</div>
            <div className="mt-5">
              <a href="#">
                <img
                  src="mainlogo.png"
                  alt="App Store"
                  className="w-40 h-20 mb-3"
                />
              </a>
            </div>
          </div>
        </div>
        <div className=" bg-[#011d46] mt-10 pt-5 w-full pb-5 flex flex-wrap justify-around text-sm ">
          <div className="mb-3 md:mb-0">
            <p>COPYRIGHT © UTTARAKHAND NATIONAL GAMES ORGANIZING COMMITTEE</p>
          </div>
          <div className="flex space-x-5">
            <p>VISITORS: 5553232</p>
            <a href="#" className="hover:underline">
              PRIVACY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
