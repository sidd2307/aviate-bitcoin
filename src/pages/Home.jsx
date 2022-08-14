import React from "react";
import Hero from "../components/Hero";
import Information from "../components/Information";

export default function Home() {
  return (
    <div className="bg-[#131128] text-white">
      <Hero />
      <Information />
    </div>
  );
}
