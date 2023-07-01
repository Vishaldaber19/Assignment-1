import React from "react";

const Cost = (props) => {
  const grandTotal = props.Cost + props.Cost * 0.18;
  return (
    <>
      <div className="text-center p-1 font-bold">
        <p className="border-b border-black p-2">Service Type : Meme Design</p>
        <p className="border-b border-black p-2">
          Sub Category : <span>Static Meme</span>{" "}
        </p>
        <p className="border-b border-black p-2">Quantity:{props.Quantity}</p>
      </div>
      <div className="text-left m-1 font-bold">
        <p className="p-2"> Total:{props.Cost}</p>
        <p className="p-2">
          GST: <strong>18%</strong>
        </p>
        <p className="p-2">Grand Total :{grandTotal}</p>
      </div>
    </>
  );
};

export default Cost;
