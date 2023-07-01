import React, { useState } from "react";
import "../App.css";
import Cost from "./Cost";

const Subcategory = () => {
  const [mystatic, setMyStatic] = useState(0);
  const [gif, setGif] = useState(0);
  const [video, setVideo] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [cost, setCost] = useState(0);
  const data = [
    {
      title: "Static Meme",
      value: mystatic,
      cost: 200,
    },

    {
      title: "Gif Meme",
      value: gif,
      cost: 300,
    },
    {
      title: "Video Meme",
      value: video,
      cost: 400,
    },
  ];

  const handleChange = (e) => {
    if (e.target.id === "Static Meme") setMyStatic(e.target.value);
    if (e.target.id === "Gif Meme") setGif(e.target.value);
    if (e.target.id === "Video Meme") setVideo(e.target.value);
  };

  const calculate = () => {
    setQuantity(
      data.reduce((final, val) => {
        final += Number(val.value);
        return final;
      }, 0)
    );
    setCost(
      data.reduce((final, val) => {
        return final + val.value * val.cost;
      }, 0)
    );
  };

  return (
    <>
      <div className="grid m-5 gap-x-10">
        <div className="row-start-1 col-span-8 ">
          {data.map((x) => (
            <>
              <div className="grid border border-gray-500 mb-2 p-5 rounded-lg">
                <div className="row-start-1 col-span-6 font-medium text-[25px]">
                  {x.title}
                </div>
                <div className="row-start-1 col-span-2 border-b border-black">
                  <input
                    type="number"
                    placeholder={`Qantity*${x.cost}`}
                    className=" outline-none "
                    size="5"
                    id={x.title}
                    onChange={(e) => handleChange(e)}
                  />{" "}
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="row-start-1 col-span-2 border border-black ">
          <Cost Quantity={quantity} Cost={cost} />
        </div>
        <div className="flex col-span-8 mt-3">
          <div className="w-1/5  h-12">
            <button className="px-6 py-3">Back</button>
          </div>
          <div className="w-3/5 bg-white h-12"></div>
          <div className="button-background w-1/5  h-12 rounded-full ">
            <button
              className="  px-6 py-3 text-white  items-end"
              onClick={() => calculate()}
            >
              {" "}
              NEXT{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subcategory;
