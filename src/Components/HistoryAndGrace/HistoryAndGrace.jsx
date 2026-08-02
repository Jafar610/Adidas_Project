import React from "react";
import coverImage from "../../assets/product/man_image.png";

function HistoryAndGrace() {
  return (
    <div className="relative min-h-[920px] overflow-hidden bg-linear-to-b from-[#F87C02] to-[#8D4600] px-3 py-6 sm:min-h-[980px] sm:px-4 sm:py-8 md:min-h-[860px] md:px-6 lg:px-8">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center">
        <div className="relative flex justify-center">
          <img
            src={coverImage}
            alt=""
            className="z-10 h-auto w-[220px] sm:w-[280px] md:w-[380px] lg:w-[520px] xl:w-[600px]"
          />
          <span className="absolute bottom-0 h-6 w-[220px] rounded-full bg-[#8D4600] blur-2xl sm:h-8 sm:w-[280px] md:h-10 md:w-[380px] lg:w-[520px] xl:w-[600px]"></span>
          <p className="absolute bottom-3 z-20 w-[80%] text-center text-sm font-medium text-white sm:text-base md:text-xl">
            To improve performances. Improve lives and change the world.
          </p>
        </div>

        <h1 className="absolute left-1/2 top-2 z-0 w-full -translate-x-1/2 text-center text-[1.5rem] font-bold leading-tight text-white sm:text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] xl:text-8xl">
          HISTORY AND GRACE
        </h1>

        <div className="absolute left-0 right-0 top-[12rem] sm:top-[13.5rem] md:top-[16rem] lg:top-[18rem]">
          <div className="mx-auto flex w-full max-w-6xl justify-center gap-2 px-2 sm:gap-4 sm:px-4 md:gap-10 md:px-6">
            <p className="w-[45%] max-w-[13rem] text-[10px] leading-4 text-white sm:max-w-[15rem] sm:text-xs sm:leading-5 md:ml-8 md:max-w-[24rem] md:text-base md:leading-6">
              At adidas, we believe that sports have the power to transform
              lives. It's not just about keeping your body and mind fit; it's
              about bringing people together and creating a community of
              individuals who share the same passion for excellence.
            </p>

            <p className="w-[45%] max-w-[13rem] text-[10px] leading-4 text-right text-white sm:max-w-[15rem] sm:text-xs sm:leading-5 md:mr-8 md:max-w-[24rem] md:text-base md:leading-6">
              Whether you're a runner, a basketball player, a soccer player, or
              someone who loves to train, you'll find a home with us. Our
              products are designed to meet your needs, no matter what your
              preferred form of exercise may be.
            </p>
          </div>
        </div>

        <div className="absolute left-0 right-0 top-[20rem] sm:top-[22rem] md:top-[24rem] lg:top-[27rem]">
          <div className="mx-auto flex w-full max-w-6xl justify-center gap-2 px-2 sm:gap-4 sm:px-4 md:gap-10 md:px-6">
            <p className="w-[45%] max-w-[13rem] text-[10px] leading-4 text-white sm:max-w-[15rem] sm:text-xs sm:leading-5 md:max-w-[24rem] md:text-base md:leading-6">
              We draw inspiration from the athletes who push themselves to their
              limits every day, and from the technology we develop to help them
              achieve their goals.
            </p>

            <p className="w-[45%] max-w-[13rem] text-[10px] leading-4 text-right text-white sm:max-w-[15rem] sm:text-xs sm:leading-5 md:max-w-[24rem] md:text-base md:leading-6">
              We're not just present on the playing field, either. You'll find
              the three stripes at music festivals, on stages, and in the city
              streets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryAndGrace;
