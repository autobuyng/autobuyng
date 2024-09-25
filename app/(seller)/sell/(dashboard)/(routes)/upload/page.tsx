'use client';
import { Plus } from 'lucide-react';
import React from 'react';
import { DataTable } from '../../_components/DataTable';
import { columns, payments } from '@/constants/TableData';

const Upload = () => {
  return (
    <main className="mx-4 ">
      <div className="flex items-center justify-between">
        <h1 className="font-bold md:text-2xl">Upload</h1>
        <button className="bg-secondary-500 text-white px-3 py-2 rounded-md whitespace-nowrap flex items-center">
          <Plus /> <span>Add Vehicle</span>
        </button>
      </div>

      <div className="mt-4 shadow-[1px_1px_16px_4px_#1F1F1F1A]   rounded-md border ">
        <DataTable columns={columns} data={payments} />
      </div>
    </main>
  );
};

export default Upload;
