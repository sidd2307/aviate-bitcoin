import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div class="py-16">
      <div class="container m-auto px-6 text-gray-600 xl:px-20">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center">
          <div class="md:7/12 lg:w-7/12">
            <h2 class="text-4xl text-white font-bold md:text-7xl">
              Buy and trade cryptos like never before.
            </h2>
            <p class="mt-6 text-[#D6D5E7] md:7/12 lg:w-11/12 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aenean dis placerat.
            </p>
            <div className="flex flex-row mt-8 gap-6 flex-wrap">
              <button className="rounded-full bg-[#6639e4] h-[60px] w-[100vw] md:w-[180px] text-white font-bold text-xl hover:bg-[#282454] hover:h-[50px] hover:w-[170px] ease-in duration-200">
                <Link to="/trendchart">Exchange</Link>
              </button>
              <button className="rounded-full bg-[#282454] h-[60px] w-[100vw] md:w-[180px] text-white font-bold text-xl hover:bg-[#6639e4] hover:h-[50px] hover:w-[170px] ease-in duration-200">
                <Link to="/trendchart">Trends</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
