import React, { useCallback } from 'react';
import Image from 'next/image';

import Document from '@/app/(seller)/sell-a-car/(dashboard)/assets/document.svg';
import { UseFormRegister } from 'react-hook-form';
import { UploadVehicleDataTypes } from '@/types/types';
import { Progress } from '@/components/ui/progress';
import { X } from 'lucide-react';

type NigerianUsedProps = {
  register: UseFormRegister<UploadVehicleDataTypes>;
  certificateProofOfOwnership: File[];
  setCertificateProofOfOwnership: React.Dispatch<React.SetStateAction<File[]>>;
  nationalCertificateOfRoadworthiness: File[];
  setNationalCertificateOfRoadworthiness: React.Dispatch<React.SetStateAction<File[]>>;
  vehicleLicense: File[];
  setVehicleLicense: React.Dispatch<React.SetStateAction<File[]>>;
};

const NigeriaUsed = ({
  register,
  certificateProofOfOwnership,
  setCertificateProofOfOwnership,
  nationalCertificateOfRoadworthiness,
  setNationalCertificateOfRoadworthiness,
  vehicleLicense,
  setVehicleLicense,
}: NigerianUsedProps) => {
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fileType:
      | 'certificateProofOfOwnership'
      | 'nationalCertificateOfRoadworthiness'
      | 'vehicleLicense',
  ) => {
    const newFile = event.target.files?.[0];
    console.log('new file');

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

    if (fileType === 'certificateProofOfOwnership') {
      setCertificateProofOfOwnership((prevFiles) => [...prevFiles, uniqueFile]);
    } else if (fileType === 'nationalCertificateOfRoadworthiness') {
      setNationalCertificateOfRoadworthiness((prevFiles) => [...prevFiles, uniqueFile]);
    } else {
      setVehicleLicense((prevFiles) => [...prevFiles, uniqueFile]);
    }

    // Reset the file input
    event.target.value = '';
  };

  const handleRemoveFile = useCallback((file: File, type: string) => {
    // const isAuction = autionPurchaseReceipt.find((f) => f === file);
    // const isCustom = shippingCustomClearanceDocuments.find((f) => f === file);
    if (type === 'certificateProofOfOwnership') {
      setCertificateProofOfOwnership((prevFiles) => prevFiles.filter((f) => f !== file));
    } else if (type === 'nationalCertificateOfRoadworthiness') {
      setNationalCertificateOfRoadworthiness((prevFiles) => prevFiles.filter((f) => f !== file));
    } else {
      setVehicleLicense((prevFiles) => prevFiles.filter((f) => f !== file));
    }
  }, []);

  const renderFilePreview = (files: File[], type: string) => (
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
              <X
                onClick={() => handleRemoveFile(file, type)}
                size={20}
                className="text-[#F5A07B]"
              />
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="space-y-10">
      <section className="w-full space-y-4">
        <h1 className="font-bold">Certificate / Proof of Ownership</h1>
        <div className="w-full relative  border-dashed border-neutral-700 border-2 h-[163px] grid place-items-center rounded-md">
          <div className="h-[60px] w-[60px] bg-[#F9C4A1] rounded-[50%] flex items-center justify-center">
            <Image src={Document} alt="upload" />
          </div>
          <p className="text-neutral-500 text-sm">
            Click here to upload your file or drag and drop
          </p>
          <input
            type="file"
            {...register('certificateProofOfOwnership')}
            onChange={(e) => handleFileChange(e, 'certificateProofOfOwnership')}
            className="block w-full h-full absolute opacity-0"
          />
          <p className="text-sm">
            <span className="text-red-500">*</span>File supported .png, .jpg, .AVIF, webp, .pdf,
          </p>
        </div>

        <div>
          <p className="text-secondary-500 font-semibold">Uploaded files</p>
          {renderFilePreview(certificateProofOfOwnership, 'certificateProofOfOwnership')}
        </div>
      </section>
      <section className="w-full space-y-4">
        <h1 className="font-bold">National Certificate of Roadworthiness</h1>
        <div className="w-full relative  border-dashed border-neutral-700 border-2 h-[163px] grid place-items-center rounded-md">
          <div className="h-[60px] w-[60px] bg-[#F9C4A1] rounded-[50%] flex items-center justify-center">
            <Image src={Document} alt="upload" />
          </div>
          <p className="text-neutral-500 text-sm">
            Click here to upload your file or drag and drop
          </p>
          <input
            type="file"
            {...register('nationalCertificateOfRoadworthiness')}
            onChange={(e) => handleFileChange(e, 'nationalCertificateOfRoadworthiness')}
            className="block w-full h-full absolute opacity-0"
          />
          <p className="text-sm">
            <span className="text-red-500">*</span>File supported .png, .jpg, .AVIF, webp, .pdf,
            .Doc
          </p>
        </div>

        <div>
          <p className="text-secondary-500 font-semibold">Uploaded files</p>
          {renderFilePreview(
            nationalCertificateOfRoadworthiness,
            'nationalCertificateOfRoadworthiness',
          )}
        </div>
      </section>
      <section className="w-full space-y-4">
        <h1 className="font-bold">Vehicle License</h1>
        <div className="w-full relative  border-dashed border-neutral-700 border-2 h-[163px] grid place-items-center rounded-md">
          <div className="h-[60px] w-[60px] bg-[#F9C4A1] rounded-[50%] flex items-center justify-center">
            <Image src={Document} alt="upload" />
          </div>
          <p className="text-neutral-500 text-sm">
            Click here to upload your file or drag and drop
          </p>
          <input
            type="file"
            {...register('vehicleLicense')}
            onChange={(e) => handleFileChange(e, 'vehicleLicense')}
            className="block w-full h-full absolute opacity-0"
          />

          <p className="text-sm">
            <span className="text-red-500">*</span>File supported .png, .jpg, .AVIF, webp, .pdf
          </p>
        </div>

        <div>
          <p className="text-secondary-500 font-semibold">Uploaded files</p>
          {renderFilePreview(vehicleLicense, 'vehicleLicense')}
        </div>
      </section>
    </div>
  );
};

export default NigeriaUsed;
