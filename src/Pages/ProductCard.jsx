import React, { useRef } from "react";
import data from "../Components/Product/data";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function ProductCard({ header_title }) {
  const scrollRef = useRef(null);

  const scrollCards = (direction) => {
    if (!scrollRef.current) return;

    const amount = 220;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <h3 className="text-sm font-bold sm:text-base">{header_title}</h3>
          <div className="flex gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => scrollCards("left")}
              className="rounded-full border border-gray-300 bg-white p-1 shadow-sm sm:p-1.5"
              aria-label="Scroll left"
            >
              <KeyboardArrowLeftIcon />
            </button>
            <button
              type="button"
              onClick={() => scrollCards("right")}
              className="rounded-full border border-gray-300 bg-white p-1 shadow-sm sm:p-1.5"
              aria-label="Scroll right"
            >
              <NavigateNextIcon />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="scroll-hide relative m-2 flex gap-3 overflow-x-auto px-2 pb-3 sm:gap-4 md:gap-5"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`
            .scroll-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {data.map((item, index) => (
            <div
              key={item.product_name || index}
              className="w-36 flex-shrink-0 sm:w-40 md:w-44 lg:w-48"
            >
              <div className="relative flex flex-col rounded-lg bg-[#eceff1] px-2 pb-2">
                <img
                  src={item.product_img}
                  alt="product image"
                  className="h-28 w-full object-contain sm:h-32 md:h-36"
                />
                <span className="absolute bottom-20 left-1/2 h-2 w-24 -translate-x-1/2 rounded-full shadow-lg shadow-[#333333] sm:bottom-24 sm:w-28"></span>

                <p className="mt-2 font-bold text-sm">{item.price}</p>
                <p className="text-xs">{item.text}</p>
                <FavoriteBorderIcon className="absolute right-2 top-3" />
              </div>

              <div className="p-1">
                <p className="text-sm font-bold">{item.product_name}</p>
                <p className="text-xs">{item.product_style}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
