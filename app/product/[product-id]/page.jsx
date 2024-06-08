import React from "react";

const Page = () => {
  return (
    <div>
      {/* Your component content goes here */}
      <h1 className="text-3xl font-bold text-center m-4">Product Details</h1>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="text-center">
          {/* Image carousel goes here */}
          <div className="carousel w-[500px]">
            <div id="item1" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                className="w-full"
              />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                className="w-full"
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                className="w-full"
              />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </div>
        <div >
          <div>
            <h2 className="text-2xl font-semibold">Dress Name</h2>
            <p className="text-lg">Product Name</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">MRP</h2>
            <p className="text-lg">$99.99</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Color</h2>
            <select className="border border-gray-300 rounded-md p-2">
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Size</h2>
            <select className="border border-gray-300 rounded-md p-2">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
