import React from "react";
import retrogames from "../../assets/image/retro-games.webp";

const Create = () => {
  return (
    <div className="grid grid-cols-2 py-8 px-8 p-20 gap-12 mx-auto mt-6 w-full max-w-[1450px]">
      <section className="bg-[#ffcf70] bg-opacity-55 flex justify-center mx-auto mt-6 w-full max-w-[1400px] rounded-3xl ">
        <div className="max-w-10xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 p-14 grid grid-row-1/2">
          {/* Right Side - Text Content */}
          <div className="w-full space-y-6">
            <p className="uppercase text-sm tracking-wide text-gray-600 font-medium">
              Collaborate
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Great content, created together
            </h1>
            <p className="text-gray-700 text-lg">
              Collaborate seamlessly with your team. Invite unlimited
              collaborators, assign roles and permissions, and keep everyone
              aligned with saved drafts and notes.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition">
              Learn more →
            </button>
          </div>
          {/* Left Side - Post Card */}
          <div className="w-full">
            {/* Image Uploads */}
            <div className="gap-2 mb-46">
              <img
                src={retrogames}
                className="rounded-lg h-70 w-full object-cover transition-all duration-300 scale-100 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#b0ec9c] bg-opacity-55 flex justify-center mx-auto mt-6 w-full max-w-[1400px] rounded-3xl ">
        <div className="max-w-10xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 p-14 grid grid-row-1/2">
          {/* Right Side - Text Content */}
          <div className="w-full space-y-6">
            <p className="uppercase text-sm tracking-wide text-gray-600 font-medium">
              Engage
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Reply to comments in a flash
            </h1>
            <p className="text-gray-700 text-lg">
              Engage with your audience on Facebook and Instagram at 10x speed.
              Buffer will help you triage and respond to comments from one
              simple dashboard.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition">
              Learn more →
            </button>
          </div>
          {/* Left Side - Post Card */}
          <div className="w-full">
            {/* Image Uploads */}
            <div className="gap-2 mb-46">
              <img
                src={retrogames}
                className="rounded-lg h-70 w-full object-cover transition-all duration-300 scale-100 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Create;
