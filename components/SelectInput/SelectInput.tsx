import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type SelectInputProps = {
  list: Array<Record<string, any>>;
  selectedInput: string;
  title?: string;
  width?: string;
  setSelectedInput: React.Dispatch<React.SetStateAction<string>>;
};

const SelectInput = ({ list, selectedInput, title, setSelectedInput, width }: SelectInputProps) => {
  return (
    <Select value={selectedInput} onValueChange={setSelectedInput}>
      <SelectTrigger
        className={` ${width} focus:outline-none h-14  border rounded-sm border-neutral-900`}
      >
        <SelectValue placeholder={title} />
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
