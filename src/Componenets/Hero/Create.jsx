import React from "react";
import retrogames from "../../assets/image/retro-games.webp";

const Create = () => {
  return (
    <section className="bg-[#f3a0be] bg-opacity-55 flex justify-center mx-auto mt-6 w-full max-w-[1400px] rounded-3xl ">
      <div className="max-w-10xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 p-14 ">
        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="uppercase text-sm tracking-wide text-gray-600 font-medium">
            Create
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Turn any idea into the perfect post{" "}
          </h1>
          <p className="text-gray-700 text-lg">
            Whether you’re flying solo or working with a team, Buffer has all
            the features to help you create, organize, and repurpose your
            content for any channel. There’s also an AI Assistant if you need
            it.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition">
            Learn more →
          </button>

          {/* Features */}
          <div className="space-y-3 text-gray-800">
            <div className="flex items-center gap-2">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.58487 19L7.07189 15.2455C7.69252 14.4869 8.00284 14.1076 8.40938 14.0633C8.47386 14.0563 8.53887 14.0555 8.60349 14.0611C9.01094 14.0961 9.32986 14.4682 9.9677 15.2123C10.6306 15.9857 10.962 16.3723 11.381 16.4005C11.4473 16.4049 11.5139 16.4027 11.5797 16.394C11.996 16.3387 12.3016 15.9312 12.9127 15.1164L14.3606 13.1858C15.11 12.1867 15.4847 11.6871 15.9919 11.693C16.4992 11.6989 16.8622 12.207 17.5881 13.2233L21 18M21 18V11C21 7.22876 21 5.34315 19.8284 4.17157C18.6569 3 16.7712 3 13 3H11C7.22876 3 5.34315 3 4.17157 4.17157C3 5.34315 3 7.22876 3 11V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H18C19.6569 21 21 19.6569 21 18Z"
                  stroke="black"
                  stroke-width="1.6"
                  class="my-path"
                ></path>
                <path
                  d="M12 9C12 10.1046 11.1046 11 10 11C8.89543 11 8 10.1046 8 9C8 7.89543 8.89543 7 10 7C11.1046 7 12 7.89543 12 9Z"
                  stroke="black"
                  stroke-width="1.6"
                  class="my-path"
                ></path>
              </svg>
              <p>Import content from Canva, Dropbox, Google and more</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <p>Visually organize your ideas into groups or themes</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
              <p>Add a beautiful link in bio page to your profiles</p>
            </div>
          </div>
        </div>
        {/* Left Side - Post Card */}
        <div className="w-full md:w-1/2 relative">
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
  );
};

export default Create;
