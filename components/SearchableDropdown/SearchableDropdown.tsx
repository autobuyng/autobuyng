'use client';

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, X, Check } from 'lucide-react';

interface Option {
  id?: number | string;
  name: string;
  label: string;
  make_id?: string | number;
}

interface EnhancedSearchableDropdownProps {
  options: Option[];
  placeholder?: string;
  onChange?: (value: string) => void;
}

export function EnhancedSearchableDropdown({
  options,
  placeholder = 'Select an option',
  onChange,
}: EnhancedSearchableDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm('');
      setHighlightedIndex(-1);
    }
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSearchTerm('');
    if (onChange) {
      onChange(option.label);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prevIndex) =>
        prevIndex < filteredOptions.length - 1 ? prevIndex + 1 : prevIndex,
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (e.key === 'Enter' && highlightedIndex !== -1) {
      e.preventDefault();
      handleOptionClick(filteredOptions[highlightedIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const clearSelection = () => {
    setSelectedOption(null);
    setSearchTerm('');
    if (onChange) {
      onChange('');
    }
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className="flex items-center justify-between w-full p-3 border border-gray-300 rounded-lg bg-white cursor-pointer transition-all duration-300 ease-in-out hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        onClick={handleToggleDropdown}
      >
        {selectedOption ? (
          <div className="flex items-center justify-between w-full">
            <span className="font-medium">{selectedOption.label}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                clearSelection();
              }}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <X size={18} />
            </button>
          </div>
        ) : (
          <span className="text-gray-500 text-xs">{placeholder}</span>
        )}
        <ChevronDown
          size={20}
          className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out">
          <div className="p-2 border-b border-gray-200">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <ul className="max-h-60 overflow-auto py-1">
            {filteredOptions.length === 0 ? (
              <li className="px-4 py-2 text-gray-500">No results found</li>
            ) : (
              filteredOptions.map((option, index) => (
                <li
                  key={option.name}
                  onClick={() => handleOptionClick(option)}
                  className={`px-4 py-2 cursor-pointer flex items-center justify-between ${
                    index === highlightedIndex ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <span>{option.name}</span>
                  {selectedOption && selectedOption.name === option.name && (
                    <Check size={18} className="text-blue-500" />
                  )}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
