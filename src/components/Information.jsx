import React from "react";
import MobImg from "../static/mob1.png";
import Laptop from "../static/laptop.png";

export default function Information() {
  return (
    <div class="py-16 xl:px-16">
      <div class="container m-auto px-6">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 flex-wrap">
          <div class="md:5/12 lg:w-5/12">
            <img
              src="https://img.freepik.com/free-vector/technology-bitcoin-background-with-holographic-effect_1017-31521.jpg?w=2000"
              alt="image"
              loading="lazy"
            />
          </div>
          <div class="md:7/12 lg:w-6/12">
            <h2 class="text-2xl font-bold md:text-4xl">
              Nuxt development is carried out by passionate developers
            </h2>
            <p class="mt-6 text-[#D6D5E7]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p class="mt-4 text-[#D6D5E7]">
              {" "}
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 flex-wrap mt-8">
          <img
            src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2021/08/04022409/WHAT-IS-BLOCKCHAIN.png"
            alt=""
          />
        </div>
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 flex-wrap mt-8">
          <div class="md:7/12 lg:w-6/12">
            <h2 class="text-2xl font-bold md:text-4xl">
              Nuxt development is carried out by passionate developers
            </h2>
            <p class="mt-6 text-[#D6D5E7]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
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
              src="https://img.capital.com/imgs/articles/1200x627x1/shutterstock_1923715325.jpg"
              alt="image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
