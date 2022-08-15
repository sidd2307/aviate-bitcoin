import React from "react";
import MobImg from "../static/mob1.png";
import Laptop from "../static/laptop.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function BitInfo() {
  return (
    <div class="py-16 xl:px-16">
      <div class="container m-auto px-6">
        {/* <AnimationOnScroll animateIn="animate__bounceInUp"> */}
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 flex-wrap mb-10">
          <div class="md:5/12 lg:w-5/12">
            <img
              src="https://m.foolcdn.com/media/dubs/images/original_imageshttpsg.foolcdn.comeditorialimag.width-880_8y7ib2T.png"
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
              Bitcoin is a digital currency which operates free of any central
              control or the oversight of banks or governments.
            </h2>
            <p class="mt-6 text-[#D6D5E7]">
              A public ledger records all bitcoin transactions and copies are
              held on servers around the world. Anyone with a spare computer can
              set up one of these servers, known as a node. Consensus on who
              owns which coins is reached cryptographically across these nodes
              rather than relying on a central source of trust like a bank.
            </p>
            <p class="mt-4 text-[#D6D5E7]">
              {" "}
              Bitcoins can currently be subdivided by seven decimal places: a
              thousandth of a bitcoin is known as a milli and a hundred
              millionth of a bitcoin is known as a satoshi.
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
              src="https://www.thebalance.com/thmb/4WLaeWt8cHcNk_pDCSPqK8i6dH0=/1500x1000/filters:fill(auto,1)/can-bitcoin-mining-make-a-profit-4157922_final-db1468c8cf124bd8bf28814939df1831.gif"
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
