import React from "react";
import coverImage from "../../assets/product/man_image.png";
function HistoryAndGrace() {
  return (
    <>
      <div className="bg-linear-to-b from-[#F87C02] to-[#8D4600] w-full h-110 relative">
        <div className="flex justify-center align-center relative">
          <img src={coverImage} alt="" className="w-150 h-110 z-10" />
          <span className="w-150 h-10 blur-2xl bg-[#8D4600] absolute bottom-0 z-15"></span>
          <p className="text-white text-xl w-100 text-center absolute bottom-4 z-20">
            To improve performances. Improve lives and change the world.
          </p>
        </div>
        <h1 className="text-8xl font-bold text-white absolute top-5 left-50 z-0">
          HISTORY AND GRACE
        </h1>

        <div className="absolute top-30 ">
          <div className="flex justify-center align-center gap-40 w-full">
            <p className="text-white ml-25 w-100">
              At adidas, we believe that sports have the power to transform
              lives. It's not just about keeping your body and mind fit; it's
              about bringing people together and creating a community of
              individuals who share the same passion for excellence.{" "}
            </p>

            <p className="text-white ml-50 w-100 text-right">
              Whether you're a runner, a basketball player, a soccer player, or
              someone who loves to train, you'll find a home with us. Our
              products are designed to meet your needs, no matter what your
              preferred form of exercise may be.{" "}
            </p>
          </div>
        </div>

        <div className="absolute top-70 ">
          <div className="flex justify-center align-center gap-40 w-full">
            <p className="text-white ml-25 w-100 z-30">
              We draw inspiration from the athletes who push themselves to their
              limits every day, and from the technology we develop to help them
              achieve their goals.
            </p>

            <p className="text-white ml-50 w-100 text-right z-30">
              We're not just present on the playing field, either. You'll find
              the three stripes at music festivals, on stages, and in the city
              streets.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryAndGrace;
