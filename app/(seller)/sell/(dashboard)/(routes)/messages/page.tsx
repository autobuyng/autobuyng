import React from 'react';

const Messages = () => {
  return (
    <main className="mx-4 ">
      <h1 className="font-bold md:text-2xl">Messages</h1>

      {/* <div className=" min-h-[50vh] grid place-items-center"> */}
      <div className="flex flex-col gap-y-4 items-center justify-center mt-8">
        <div className="h-[100px] w-[100px] rounded-[50%] bg-[#D9D9D9] "></div>
        <p className=" text-xs md:text-sm">you have no pending orders yet</p>
        <button className="text-white bg-secondary-500 px-3 py-1 rounded-md">Find a vehicle</button>
      </div>
      {/* </div> */}
    </main>
  );
};

export default Messages;
