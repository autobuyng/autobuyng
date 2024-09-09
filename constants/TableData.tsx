import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';

type Payment = {
  id: string;
  image?: string;
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
    header: 'IMAGE',
    cell: ({ row }) => {
      const imageUrl = row.getValue('image');
      console.log(row.getValue('image'));
      return (
        <div className="text-right font-medium">
          <Image src={imageUrl as string} width={70} height={70} alt="image" />
        </div>
      );
    },
  },
  {
    accessorKey: 'status',

    header: () => <div className="whitespace-nowrap">VEHICLE NAME </div>,
    cell: ({ row }) => {
      return <div className="font-medium whitespace-nowrap">{row.getValue('status')}</div>;
    },
  },
  {
    accessorKey: 'email',
    header: 'VIN',
  },
  {
    accessorKey: 'amount',
    header: () => <div className="whitespace-nowrap">VEHICLE ID </div>,
  },
  {
    accessorKey: 'id',
    header: 'DESCRIPTION',
  },
  {
    accessorKey: 'status',
    header: 'STATUS',
  },
];
