'use client';
import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

type SelectInputProps = {
  list: Array<Record<string, any>>;
  selectedInput: string;
  title?: string;
  defaultValue?: string;
  width?: string;
  height?: string;
  setSelectedInput: React.Dispatch<React.SetStateAction<string>>;
};

const SelectInput = ({
  list,
  selectedInput,
  title,
  defaultValue,
  setSelectedInput,
  width,
  height,
}: SelectInputProps) => {
  console.log(selectedInput, 'selectedInput');
  return (
    <Select value={selectedInput} onValueChange={setSelectedInput}>
      <SelectTrigger
        className={cn(
          `focus:outline-none h-[44px]  border rounded-sm border-neutral-900`,
          height ? height : '',
          width ? width : '',
        )}
      >
        <SelectValue placeholder={title} defaultValue={defaultValue} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {list.map((listItem) => {
            return (
              <SelectItem key={listItem.id} value={listItem.name}>
                {listItem.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectInput;
