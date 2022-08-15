import React from "react";
import MobImg from "../static/mob1.png";
import Laptop from "../static/laptop.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function BlockInfo() {
  return (
    <div class="py-16 xl:px-16">
      <div class="container m-auto px-6">
        {/* <AnimationOnScroll animateIn="animate__bounceInUp"> */}
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 flex-wrap mb-10">
          <div class="md:5/12 lg:w-5/12">
            <img
              src="https://www.investopedia.com/thmb/DgmKuK6aoY6Jw3P4eox-oMEMvh0=/660x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_Final_Blockchain_Sep_2020-01-60f31a638c4944abbcfde92e1a408a30.jpg"
              alt="image"
              loading="lazy"
            />
            {/* <img
              src="https://img.freepik.com/free-vector/technology-bitcoin-background-with-holographic-effect_1017-31521.jpg?w=2000"
              alt="image"
              loading="lazy"
            /> */}
          </div>
          <div class="md:7/12 lg:w-6/12">
            <h2 class="text-2xl font-bold md:text-4xl">
              A blockchain is a distributed database or ledger that is shared
              among the nodes of a computer network.
            </h2>
            <p class="mt-6 text-[#D6D5E7]">
              One key difference between a typical database and a blockchain is
              how the data is structured. A blockchain collects information
              together in groups, known as blocks, that hold sets of
              information.
            </p>
            <p class="mt-4 text-[#D6D5E7]">
              {" "}
              A database usually structures its data into tables, whereas a
              blockchain, as its name implies, structures its data into chunks
              (blocks) that are strung together.
            </p>
          </div>
        </div>
        {/* </AnimationOnScroll> */}

        {/* <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 flex-wrap mt-8">
          <img
            src="https://img.freepik.com/free-vector/technology-bitcoin-background-with-holographic-effect_1017-31521.jpg?w=2000"
            alt=""
          />
        </div> */}
        {/* <AnimationOnScroll animateIn="animate__bounceInUp"> */}
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 flex-wrap mt-14">
          <div class="md:7/12 lg:w-6/12">
            <h2 class="text-2xl font-bold md:text-4xl">
              The goal of blockchain is to allow digital information to be
              recorded and distributed, but not edited.
            </h2>
            <p class="mt-6 text-[#D6D5E7]">
              The goal of blockchain is to allow digital information to be
              recorded and distributed, but not edited. In this way, a
              blockchain is the foundation for immutable ledgers, or records of
              transactions that cannot be altered, deleted, or destroyed. This
              is why blockchains are also known as a distributed ledger
              technology (DLT).
            </p>
            <p class="mt-4 text-[#D6D5E7]">
              {" "}
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
          <div class="md:5/12 lg:w-5/12">
            <img
              src="https://www.investopedia.com/thmb/hZuXjD7RtdrEZQcM8uU67CJSjOk=/660x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_Final_Blockchain_Sep_2020-02-d8258ab814a34756bf51f1f95c78dc63.jpg"
              alt="image"
              loading="lazy"
            />
          </div>
        </div>
        {/* </AnimationOnScroll> */}
      </div>
    </div>
  );
}
