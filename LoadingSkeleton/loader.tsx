import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className="min-h-screen h-full font-bold text-2xl flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        <span className=" absolute  h-20 w-20 border-t-4 border-l-4 border-b-2 border-r-2 border-b-gray-200 border-r-gray-200 border-t-primary-900 border-l-primary-900 p-4 rounded-full animate-spin"></span>
        <Image
          src="/icons/buyer.svg"
          alt="buyer"
          width={40}
          height={40}
          className="mx-auto animate-scalePulse "
        />
      </div>
    </div>
  )
}

export default Loader