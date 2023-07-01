import logo from "./Assets/marque_logo.png";
import "./App.css";
import Subcategory from "./Components/Subcategory";
import { useEffect } from "react";

function App() {
  useEffect(()=> {
    alert("Press Next for Caculation of Quantity")
  },[])
  return (
    <>
      <div className="grid bg-white">
        <div
          className="row-start-1
                    col-span-1 h-[100vh] "
        >
          <img
            src={logo}
            alt="not found"
            width={250}
            height={200}
            className="py-5 px-6"
          ></img>
        </div>
        <div
          className=" row-start-1 
                    col-span-8 h-[100vh]"
        >
          <div className="m-5 p-5">
            <p> Step 2 of 3</p>
            <h1 className=" font-medium text-[25px]">
              Which Meme formats are you looking for?
            </h1>

            <div className="flex mt-4">
              <div className="button-background rounded-full text-center text-bold text-[25px] text-white mx-2">
                <button className="button px-6 py-2">Licence</button>
              </div>
              <div className="text-center text-bold text-[25px] mx-2">
                <button className="button p-2 ">Standard</button>
              </div>
            </div>
            <Subcategory />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
