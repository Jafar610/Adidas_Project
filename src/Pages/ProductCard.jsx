import React, { useRef } from "react";
import data from "../Components/Product/data";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function ProductCard() {
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
      <div className="">
        <div className="flex justify-between px-6 py-2">
          <h3 className="font-bold">adiWeek</h3>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollCards("left")}
              className="rounded-full border border-gray-300 bg-white p-1 shadow-sm"
              aria-label="Scroll left"
            >
              <KeyboardArrowLeftIcon />
            </button>
            <button
              type="button"
              onClick={() => scrollCards("right")}
              className="rounded-full border border-gray-300 bg-white p-1 shadow-sm"
              aria-label="Scroll right"
            >
              <NavigateNextIcon />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="scroll-hide flex m-2 p-2 relative gap-4 overflow-x-auto pb-3"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`
            .scroll-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {data.map((item, index) => (
            <div key={item.product_name || index} className="flex-shrink-0">
              <div className="bg-[#eceff1] flex flex-col px-2 pb-2 w-40 relative rounded-lg ">
                <img
                  src={item.product_img}
                  alt="product image"
                  className="flex align-center"
                />
                <span className="absolute bottom-22 left-1/2 transform -translate-x-1/2 w-30 h-2 rounded-full shadow-lg shadow-[#333333]"></span>

                <p className="font-bold text-sm">{item.price}</p>
                <p className="text-xs">{item.text}</p>
                <FavoriteBorderIcon className="absolute top-3 right-2" />
              </div>

              <div className="p-1">
                <p className="font-bold text-sm">{item.product_name}</p>
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
