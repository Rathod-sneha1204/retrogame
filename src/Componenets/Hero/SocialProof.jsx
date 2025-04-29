import React from "react";

const SocialProof = () => {
  return (        
    <section className="bg-white ">
      <div className="container mt-6 flex flex-col sm:flex:row gap-3 relative">
        <dl className="relative m-4 flex">  
      <div className="mx-auto gap-x-4 rounded-xl  bg-white px-5 py-6 w-96 text-center border border-black"> 
            <dt className="font-boldsm text-5xl p-6">181,86</dt>
            <dd>
              <span>Active users</span>
            </dd>
          </div>
      <div className="mx-auto gap-x-4 rounded-xl  bg-white px-5 py-6 w-96 text-center border border-black ">

            <dt className="font-boldsm text-5xl p-6"> 758,81 </dt>
            <dd>
              <span> Post published last month</span>
            </dd>
          </div>
      <div className="mx-auto gap-x-4 rounded-xl  bg-white px-5 py-6 w-96  text-center border border-black ">
            <dt className="font-boldsm text-5xl p-6"> 5 </dt>
            <dd>
              <span>Social platforms supported</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
export default SocialProof;
