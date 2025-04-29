import React from "react";
import Navbar from "./Navbar";
import slotGame from "../../assets/image/slot game.jpg";
import gaming from "../../assets/image/gaming.avif";
import images from "../../assets/image/images.jpeg";
import img3968 from "../../assets/image/IMG_3968.webp";

const Hero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted!");
  };

  return (
    // <section className="bg-gray-100 overflow-x-clip h-[700px]">
    <section className="flex flex-col items-center justify-center overflow-x-clip px-1 md:px-1 py-24 md:py-2 my-1 md:my-1 ">
      <div className=" fixed top-0 start-0 z-50 flex flex-col justify-between w-full  "><Navbar /></div>
      <div className="relative flex flex-col items-center justify-center h-full w-[1500px] p-14">
        {/* Decorative Images */}
        <img
        src={slotGame}
        alt="Decorative Slot Game"
        className="absolute top-6 left-10 w-16 md:w-32 lg:w-48 drop-shadow-lg hidden md:block"
      />
      <img
        src={images}
        alt="Decorative Analytics"
        className="absolute bottom-24 left-12 w-16 md:w-32 lg:w-48 drop-shadow-lg hidden md:block"
      />
      <img
        src={gaming}
        alt="Decorative Gaming"
        className="absolute top-10 right-16 w-16 md:w-32 lg:w-48 rotate-3 drop-shadow-xl hidden md:block"
      />
      <img
        src={img3968}
        alt="Decorative Image"
        className="absolute bottom-10 right-10 w-16 md:w-32 lg:w-48 drop-shadow-lg hidden md:block"
      />

        {/* Hero Content */}
        <div className="text-center max-w-100xl mx-auto bg-[#f5f5eb] bg-opacity-30 w-full py-40 rounded-2xl shadow-lg">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Your content, everywhere
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Plan, create, and share content with the most flexible social media
            toolkit.
          </p>

          {/* Signup Form */}
          <form
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
            onSubmit={handleSubmit}
          >
            <input
              className="px-5 py-4 text-lg border rounded-lg w-86 shadow-md"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email..."
              required
            />
            <button
              className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg hover:bg-green-600 transition shadow-lg w-86"
              type="submit"
            >
              Get started now →
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-2">
            By entering your email, you agree to receive emails from Buffer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
