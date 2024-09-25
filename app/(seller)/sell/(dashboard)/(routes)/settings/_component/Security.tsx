import React from 'react';

const Security = () => {
  return (
    <div className="mt-4">
      <h1 className="font-bold">Password</h1>
      <p>Kindly confirm your current password before setting new one 8 characters minimum</p>

      <div className="mt-4">
        <form action="" className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-left  ">
              Current Password
            </label>
            <div className="w-full">
              <input
                type="password"
                id="password"
                placeholder="password"
                className="px-2  max-w-[500px] border rounded-md border-neutral-700 shadow-sm w-full h-full py-3  outline-none sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-left ">
              New Password
            </label>
            <div className="w-full">
              <input
                type="password"
                id="password"
                placeholder="password"
                className="px-2 max-w-[500px]  border rounded-md border-neutral-700 shadow-sm w-full h-full py-3  outline-none sm:text-sm"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Security;
