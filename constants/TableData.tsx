'use client';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';

type Payment = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
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

export const columns: ColumnDef<UploadedVehicle>[] = [
  {
    accessorKey: 'files',
    header: () => <div className="whitespace-nowrap text-center">IMAGE </div>,
    cell: ({ row }) => {
      const imageUrl = row.getValue('files') as Array<{ file: string }>;

      return (
        <div className="text-center font-medium">
          <Image
            src={imageUrl?.[0]?.file || 'https://ik.imagekit.io/0xy9wqmrh/tableimage'}
            width={70}
            height={70}
            alt="image"
            className="mx-auto"
          />
        </div>
      );
    },
  },
  {
    accessorKey: 'make',
    header: () => <div className="whitespace-nowrap text-center">VEHICLE MAKE </div>,
    cell: ({ row }) => {
      return (
        <div className="font-medium text-center whitespace-nowrap">{row.getValue('make')}</div>
      );
    },
  },
  {
    accessorKey: 'vin',
    header: () => <div className="whitespace-nowrap text-center">VIN </div>,
  },
  {
    accessorKey: '_id',
    header: () => <div className="whitespace-nowrap text-center">VEHICLE ID </div>,
  },
  {
    accessorKey: 'description',
    header: () => <div className="whitespace-nowrap text-center">DESCRIPTION </div>,
    cell: ({ row }) => {
      return (
        <div className="font-medium text-center whitespace-nowrap">
          {row.getValue('description') || 'No description'}
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: () => <div className="whitespace-nowrap text-center">STATUS</div>,

    cell: ({ row }) => {
      return (
        <div className="font-medium text-center whitespace-nowrap border-2 border-green-900 text-green-500 px-2 py-3 ">
          {row.getValue('status')}
        </div>
      );
    },
  },
];

export const dashboardcolumns: ColumnDef<Payment>[] = [
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

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { UploadedVehicle } from '@/types/types';

export default function VehicleDetailsError({ error }: { error: string }) {
  return (
    <div className="max-w-7xl mx-auto p-4 mb-24">
      {/* Error Alert */}
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="font-bold text-lg">{error} Failed to fetch</AlertDescription>
        <AlertDescription className=""></AlertDescription>
      </Alert>

      <div className="grid gap-8 md:grid-cols-5">
        <div className="space-y-6 col-span-3">
          {/* Image Carousel Placeholder */}
          <div className="relative aspect-[16/9] bg-muted rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <AlertCircle className="w-12 h-12 text-muted-foreground" />
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 bg-background/80 backdrop-blur-sm"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 bg-background/80 backdrop-blur-sm"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-4 right-4 h-8 w-8 bg-background/80 backdrop-blur-sm"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-sm">
              1 / 5
            </div>
          </div>

          {/* Vehicle Info */}
          <div className="space-y-4">
            <div className="flex items-baseline justify-between">
              <h1 className="text-2xl font-semibold text-muted-foreground">Mercedes Benz</h1>
              <div className="text-xl font-semibold text-muted-foreground">18500000</div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>70k miles</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">foreign</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">VIN:</span>
              <span className="font-mono text-muted-foreground">WBA8D9G53HNU12345</span>
              <Button variant="link" className="h-auto p-0" disabled>
                View Vehicle History
              </Button>
            </div>
          </div>

          {/* Overview */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <div className="text-muted-foreground">Blue</div>
                  <div className="text-xs text-muted-foreground">Interior color</div>
                </div>
                <div className="space-y-1">
                  <div className="text-muted-foreground">4 Wheel Drive</div>
                  <div className="text-xs text-muted-foreground">Drive train</div>
                </div>
                <div className="space-y-1">
                  <div className="text-muted-foreground">automatic</div>
                  <div className="text-xs text-muted-foreground">Transmission</div>
                </div>
                <div className="space-y-1">
                  <div className="text-muted-foreground">20 - 28 MPG</div>
                  <div className="text-xs text-muted-foreground">MPG</div>
                </div>
                <div className="space-y-1">
                  <div className="text-muted-foreground">gasoline</div>
                  <div className="text-xs text-muted-foreground">Fuel Type</div>
                </div>
                <div className="space-y-1">
                  <div className="text-muted-foreground">2.4L 4-cyl</div>
                  <div className="text-xs text-muted-foreground">Engine</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 col-span-2">
          {/* Reliability Score */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-6">Autobuy Reliability Score</h2>
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-muted-foreground">
                  85%
                </div>
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#eee"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#ccc"
                    strokeWidth="3"
                    strokeDasharray="85, 100"
                  />
                </svg>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Engine</span>
                    <span className="text-muted-foreground">9/10</span>
                  </div>
                  <Progress value={90} className="bg-muted" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Body</span>
                    <span className="text-muted-foreground">8/10</span>
                  </div>
                  <Progress value={80} className="bg-muted" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Wheels</span>
                    <span className="text-muted-foreground">8.5/10</span>
                  </div>
                  <Progress value={85} className="bg-muted" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Accessories</span>
                    <span className="text-muted-foreground">9/10</span>
                  </div>
                  <Progress value={90} className="bg-muted" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button className="w-full" disabled>
              Download Appraisal
            </Button>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Proceed with your purchase</h3>
              <p className="text-sm text-muted-foreground">
                Proceed to buy this vehicle and get it delivered to your doorstep or pickup at
                Autobuy registered outlets.
              </p>
              <Button className="w-full" variant="default" disabled>
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
