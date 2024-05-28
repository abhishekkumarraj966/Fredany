import React from "react";
import AppLayout from "./AppLayout";

const Feedbackform = () => {
  return (
    <div className=" bg-[#D6763B] pt-[15px] ">
      <AppLayout>
        <div className="p-4 mx-auto sm:mx-20 w-[80%] bg-[#7D3C13] rounded-xl ">
          <h2 className="font-bold text-[15px]  text-center sm:text-[28px] lg:text-[32px]    text-white ">
            feedback form
          </h2>
          <p className="text-white">Name</p>
          <input
            type="text"
            placeholder="Name"
            className=" sm:w-[100%] rounded-md h-8 py-1 px-2 mt-1 bg-gradient-to-tl from-[#7D3C13] to-[#be8a5c]"
          />
          <p className="text-white mt-5">Feedback</p>
          <input
            type="text"
            placeholder="Type your message..."
            className=" sm:w-[100%] bg-gradient-to-tl from-[#7D3C13] rounded-md h-14 lg:h-24 px-2 mt-1 to-[#be8a5c]"
          />

          <button
            type="submit"
            className="bg-[#D4B294] sm:w-[30%]  text-white rounded-md py-2 px-3 mt-4 font-medium"
          >
            Submit
          </button>
        </div>
      </AppLayout>
    </div>
  );
};

export default Feedbackform;
