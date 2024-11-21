import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';

type Payment = {
  id: string;
  image?: string | any;
  amount: number;
  status: 'PENDING' | 'APPROVED' | 'DISAPPROVED';
  email: string;
};

export const payments: Payment[] = [
  {
    id: '728ed52f',
    image: 'https://ik.imagekit.io/0xy9wqmrh/tableimage',
    amount: 100,
    status: 'APPROVED',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    image: 'https://ik.imagekit.io/0xy9wqmrh/tableimage',
    amount: 125,
    status: 'PENDING',
    email: 'example@gmail.com',
  },
  {
    id: '489e1d42',
    image: 'https://ik.imagekit.io/0xy9wqmrh/tableimage',
    amount: 125,
    status: 'DISAPPROVED',
    email: 'example@gmail.com',
  },
  {
    id: '489e1d42',
    image: 'https://ik.imagekit.io/0xy9wqmrh/tableimage',
    amount: 125,
    status: 'APPROVED',
    email: 'example@gmail.com',
  },
  {
    id: '489e1d42',
    image: 'https://ik.imagekit.io/0xy9wqmrh/tableimage',
    amount: 125,
    status: 'PENDING',
    email: 'example@gmail.com',
  },
  // ...
];

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'image',
    header: () => <div className="whitespace-nowrap text-center">IMAGE </div>,
    cell: ({ row }) => {
      const imageUrl = row.getValue('image');
      console.log(row.getValue('image'));
      return (
        <div className="text-center font-medium">
          <Image src={imageUrl as string} width={70} height={70} alt="image" className="mx-auto" />
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: () => <div className="whitespace-nowrap text-center">VEHICLE NAME </div>,
    cell: ({ row }) => {
      return (
        <div className="font-medium text-center whitespace-nowrap">{row.getValue('status')}</div>
      );
    },
  },
  {
    accessorKey: 'email',
    header: () => <div className="whitespace-nowrap text-center">VIN </div>,
  },
  {
    accessorKey: 'amount',
    header: () => <div className="whitespace-nowrap text-center">VEHICLE ID </div>,
  },
  {
    accessorKey: 'id',
    header: () => <div className="whitespace-nowrap text-center">DESCRIPTION </div>,
  },
  {
    accessorKey: 'status',
    header: () => <div className="whitespace-nowrap text-center">STATUS </div>,

    cell: ({ row }) => {
      return (
        <div className="font-medium text-center whitespace-nowrap border-2 border-green-900 text-green-500 px-2 py-3 ">
          {row.getValue('status')}
        </div>
      );
    },
  },
];
