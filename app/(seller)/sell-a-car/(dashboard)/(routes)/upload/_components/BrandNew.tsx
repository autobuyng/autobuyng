'use client';
import React, { useCallback } from 'react';
import Image from 'next/image';

import Document from '@/app/(seller)/sell-a-car/(dashboard)/assets/document.svg';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { UploadVehicleDataTypes } from '@/types/types';
import { X } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

type BrandNewVehicleProps = {
  register: UseFormRegister<UploadVehicleDataTypes>;
  setValue: UseFormSetValue<UploadVehicleDataTypes>;
  purchaseReceipts: File[];
  setPurchaseReceipts: React.Dispatch<React.SetStateAction<File[]>>;
  otherDocuments: File[];
  setOtherDocuments: React.Dispatch<React.SetStateAction<File[]>>;
};

// const MAX_FILE_SIZE = 5000000;
// const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/gif'];

const BrandNew = ({
  register,
  purchaseReceipts,
  setPurchaseReceipts,
  otherDocuments,
  setOtherDocuments,
}: BrandNewVehicleProps) => {
  // const [purchaseReceipts, setPurchaseReceipts] = useState<File[]>([]);
  // const [otherDocuments, setOtherDocuments] = useState<File[]>([]);
  console.log(purchaseReceipts, 'purchasereceipt');
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fileType: 'purchaseReceipts' | 'otherSupportingDocuments',
  ) => {
    const newFile = event.target.files?.[0];

    if (!newFile) {
      return;
    }

    // Create a unique identifier
    const uniqueId = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Create a new File object with a unique name
    const uniqueFile = new File([newFile], `${uniqueId}_${newFile.name}`, {
      type: newFile.type,
      lastModified: newFile.lastModified,
    });

    if (fileType === 'purchaseReceipts') {
      setPurchaseReceipts((prevFiles) => [...prevFiles, uniqueFile]);
    } else {
      setOtherDocuments((prevFiles) => [...prevFiles, uniqueFile]);
    }

    // Reset the file input
    event.target.value = '';
  };

  // const handleFileChange = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  //   fileType: 'purchaseReceipts' | 'otherSupportingDocuments',
  // ) => {
  //   const newFile = event.target.files?.[0];
  //   if (newFile) {
  //     if (fileType === 'purchaseReceipts') {
  //       setPurchaseReceipts((prevFiles) => [...prevFiles, newFile]);
  //     } else {
  //       setOtherDocuments((prevFiles) => [...prevFiles, newFile]);
  //     }
  //   }
  // };

  const handleRemoveFile = useCallback((file: File) => {
    const fileType = purchaseReceipts.find((f) => f === file);
    if (fileType) {
      setPurchaseReceipts((prevFiles) => prevFiles.filter((f) => f !== file));
    } else {
      setOtherDocuments((prevFiles) => prevFiles.filter((f) => f !== file));
    }
  }, []);

  const renderFilePreview = (files: File[]) => (
    <div className="flex flex-col gap-2 mt-4">
      {files.map((file, index) => {
        return (
          <div
            key={index}
            className="w-full flex items-center justify-between border border-secondary-100 rounded-md py-4 px-2 "
          >
            <div className="group relative block w-10 h-10  space-y-2 rounded-[50%] overflow-hidden">
              {file.type === 'application/pdf' ? (
                <iframe
                  src={URL.createObjectURL(file)}
                  title={`PDF preview`}
                  className="object-cover bg-center w-full border-none outline-none overflow-hidden pointer-events-none"
                />
              ) : (
                <Image
                  src={URL.createObjectURL(file) || '/placeholder.svg'}
                  alt={`File preview`}
                  fill
                  className="object-cover w-full h-full  pointer-events-none"
                />
              )}
            </div>

            <div className="flex flex-1 flex-col gap-1 px-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{file.name.split('_').pop()}</span>
                <span className="text-xs text-muted-foreground">
                  {(file.size / 1024).toFixed(0)}kb
                </span>
              </div>
              <Progress value={100} className="h-1 bg-[#F5A07B]" />
            </div>

            <div>
              <X size={20} onClick={() => handleRemoveFile(file)} className="text-[#F5A07B]" />
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="space-y-10">
      <section className="w-full space-y-4">
        <h1 className="font-bold">Purchase Receipts</h1>
        <div className="w-full relative border-dashed border-neutral-700 border-2 h-[163px] grid place-items-center rounded-md">
          <div className="h-[60px] w-[60px] bg-[#F9C4A1] rounded-[50%] flex items-center justify-center">
            <Image src={Document || '/placeholder.svg'} alt="upload" />
          </div>
          <p className="text-neutral-500 text-sm">
            Click here to upload your file or drag and drop
          </p>
          <input
            type="file"
            {...register('purchaseReceipts')}
            onChange={(e) => handleFileChange(e, 'purchaseReceipts')}
            className="block w-full h-full absolute opacity-0"
          />
          <p className="text-sm">
            <span className="text-red-500">*</span>File supported .png, .jpg, .AVIF, webp, .pdf,
            .Doc
          </p>
        </div>

        <div>
          <p className="text-secondary-500 font-semibold">Uploaded files</p>
          {renderFilePreview(purchaseReceipts)}
        </div>
      </section>

      <section className="w-full space-y-4">
        <h1 className="font-bold">Other supporting document Documents</h1>
        <div className="w-full relative border-dashed border-neutral-700 border-2 h-[163px] grid place-items-center rounded-md">
          <div className="h-[60px] w-[60px] bg-[#F9C4A1] rounded-[50%] flex items-center justify-center">
            <Image src={Document || '/placeholder.svg'} alt="upload" />
          </div>
          <p className="text-neutral-500 text-sm">
            Click here to upload your file or drag and drop
          </p>
          <input
            type="file"
            {...register('otherSupportingDocuments')}
            onChange={(e) => handleFileChange(e, 'otherSupportingDocuments')}
            className="block w-full h-full absolute opacity-0"
          />
          <p className="text-sm">
            <span className="text-red-500">*</span>File supported .png, .jpg, .AVIF, webp, .pdf,
            .Doc
          </p>
        </div>

        <div>
          <p className="text-secondary-500 font-semibold">Uploaded files</p>
          {renderFilePreview(otherDocuments)}
        </div>
      </section>
    </div>
  );
};

export default BrandNew;
