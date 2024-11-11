import React from 'react';
import Image from 'next/image';

import Document from '@/app/(seller)/sell-a-car/(dashboard)/assets/document.svg';

const ForeignUsed = () => {
  return (
    <div className="space-y-10">
      <section className="w-full space-y-4">
        <h1 className="font-bold">Auction / Purchase Receipts</h1>
        <div className="w-full  border-dashed border-neutral-700 border-2 h-[173px] grid place-items-center rounded-md">
          <div className="h-[60px] w-[60px] bg-[#F9C4A1] rounded-[50%] flex items-center justify-center">
            <Image src={Document} alt="upload" />
          </div>
          <p className="text-neutral-500 text-sm text-center">
            Click here to upload your file or drag and drop
          </p>
          <p className="text-sm text-center">
            <span className="text-red-500 ">*</span>File supported .png, .jpg, .AVIF, webp, .pdf,
            .Doc
          </p>
        </div>

        <div>
          <p className="text-secondary-500 font-semibold">Uploaded files</p>
        </div>
      </section>

      <section className="w-full space-y-4">
        <h1 className="font-bold">Shipping & Custom Clearance Documents</h1>
        <div className="w-full  border-dashed border-neutral-700 border-2 h-[173px] grid place-items-center rounded-md">
          <div className="h-[60px] w-[60px] bg-[#F9C4A1] rounded-[50%] flex items-center justify-center">
            <Image src={Document} alt="upload" />
          </div>
          <p className="text-neutral-500 text-sm text-center">
            Click here to upload your file or drag and drop
          </p>
          <p className="text-sm text-center">
            <span className="text-red-500 text-center">*</span>File supported .png, .jpg, .AVIF,
            webp, .pdf, .Doc
          </p>
        </div>

        <div>
          <p className="text-secondary-500 font-semibold">Uploaded files</p>
        </div>
      </section>

      <section className="w-full space-y-4">
        <h1 className="font-bold">All Repairs Receipts</h1>
        <div className="w-full  border-dashed border-neutral-700 border-2 h-[173px] grid place-items-center rounded-md">
          <div className="h-[60px] w-[60px] bg-[#F9C4A1] rounded-[50%] flex items-center justify-center">
            <Image src={Document} alt="upload" />
          </div>
          <p className="text-neutral-500 text-sm text-center">
            Click here to upload your file or drag and drop
          </p>
          <p className="text-sm text-center">
            <span className="text-red-500 text-center">*</span>File supported .png, .jpg, .AVIF,
            webp, .pdf, .Doc
          </p>
        </div>

        <div>
          <p className="text-secondary-500 font-semibold">Uploaded files</p>
        </div>
      </section>
    </div>
  );
};

export default ForeignUsed;
