import {
  Menu,
  User,
  Search,
  Ticket,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

const UttarakhandGamesHero = () => {
  return (
    <div
      className="relative min-h-screen
      text-white pb-24"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-bl-[150px]"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/j2HFZBFK/ef90e572756396dbad1a03361f17df2f.jpg')",
        }}
      ></div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <header className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Menu
              color="black"
              size={16}
              className="h-10 w-10 bg-white p-2 rounded-full"
            />
            <span className="">Menu</span>
          </div>
          <img
            src="logo.png"
            alt="Uttarakhand logo"
            className="h-12 text-center"
          />
          <div className="flex items-center space-x-4">
            <Ticket size={16} />
            <span>Ticketing</span>
            <ShoppingBag size={16} />
            <span>Shop</span>
            <User size={16} />
            <span>Login</span>

            <button
              className=" border-white text-sm flex p-2 rounded-3xl
            "
            >
              <span>Search..</span>
              <Search size={16} />
            </button>
          </div>
        </header>

        {/* Main content */}
        <main className="mt-16 text-center">
          <div className="flex justify-center mb-8">
            {/* Placeholder for partner logos */}
            <div className="bg-white text-black px-4 py-2 rounded-full flex items-center space-x-2">
              <img
                src="https://i.postimg.cc/5ygmHJrH/06d915d8019c32de5763ef2460ea5e1f.png"
                alt="Partner logo"
                className="h-8 w-8"
              />
              <img
                src="https://i.postimg.cc/5ygmHJrH/06d915d8019c32de5763ef2460ea5e1f.png"
                alt="Partner logo"
                className="h-8 w-8"
              />
              <img
                src="https://i.postimg.cc/5ygmHJrH/06d915d8019c32de5763ef2460ea5e1f.png"
                alt="Partner logo"
                className="h-8 w-8"
              />
              <div className="flex items-center space-x-2 ml-4">
                <span className="font-bold text-2xl">179</span>
                <span className="text-sm">Days</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-2xl">11</span>
                <span className="text-sm">Hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-2xl">56</span>
                <span className="text-sm">Mins</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-2xl">05</span>
                <span className="text-sm">Sec</span>
              </div>
            </div>
          </div>
          <div className="lg:gap-32 pl-5 lg:flex">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-bold mb-4 text-start font-[Montserrat]">
                The 38th National <br />
                Games, Uttarakhand <br />
                2024
              </h1>
              <p className="text-xs mb-8 lg:text-start">
                Where fervour converges with brilliance! Immerse yourself in the
                exhilarating spectacle as athletes hailing from every corner of
                Uttarakhand vie for victory in a dazzling display of skill and
                camaraderie. Come together to commemorate our abundant sporting
                legacy and kindle the flame of togetherness. Brace yourself for
                an indelible odyssey towards sporting eminence. Prepare to dive
                into the excitement and witness the enchantment of the National
                Games hosted in Uttarakhand!
              </p>

              <button className="bg-white hover:animate-bounce flex justify-start text-[#212121] px-2 py-2 rounded-full font-bold text-sm hover:bg-blue-100 transition duration-300">
                Uttarakhand Unleashed <ArrowRight size={20} />
              </button>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className=" p-6 rounded-lg ">
                <button className="hover:animate-pulse text-sm p-2 rounded-3xl font-bold mb-2 text-black bg-[#D7C378] flex justify-start hover:bg-yellow-400">
                  Live Registration
                </button>
                <h2 className="text-start font-bold text-sm">
                  The Game Live Registration
                </h2>
                <p className="text-start text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className=" p-6 rounded-lg">
                <button className="text-sm hover:animate-pulse font-bold mb-2 p-2 rounded-3xl text-black bg-[#D7C378] flex justify-start hover:bg-yellow-400">
                  Live Accredation
                </button>
                <h2 className="text-start font-bold text-sm ">
                  The Game Live Registration
                </h2>
                <p className="text-start text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UttarakhandGamesHero;
