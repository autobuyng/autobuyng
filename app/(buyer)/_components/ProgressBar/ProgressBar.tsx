'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import Reliability from '@/app/(buyer)/(routes)/(main)/vehicle/assets/reliability.svg';

const SemiCircleProgressBar = ({
  percentage = 0,
  size = 100,
  strokeWidth = 5,
  color = '#3b82f6',
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size / 2 }}>
      <svg width={size} height={size / 2} viewBox={`0 0 ${size} ${size / 2}`}>
        <path
          d={`M${strokeWidth / 2},${size / 2} A${radius},${radius} 0 0,1 ${size - strokeWidth / 2},${size / 2}`}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />
        <path
          d={`M${strokeWidth / 2},${size / 2} A${radius},${radius} 0 0,1 ${size - strokeWidth / 2},${size / 2}`}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center" style={{ top: '25%' }}>
        <Image src={Reliability} alt="Relability" />
        {/* <span className="text-2xl font-bold">{`${Math.round(progress)}%`}</span> */}
      </div>
    </div>
  );
};

export default SemiCircleProgressBar;

type ProgressBar = {
  progress?: string;
  height?: string;
  bgColor?: string;
  fillColor?: string;
};

export const ProgressBar = ({
  progress,
  height = 'h-2',
  bgColor = 'bg-gray-200',
  fillColor = 'bg-primary-700',
}: ProgressBar) => {
  return (
    <div className={`w-full ${bgColor} rounded-full ${height} overflow-hidden`}>
      <div
        className={`${fillColor} ${height}`}
        style={{ width: `${progress}%`, borderRadius: '5px' }}
      ></div>
    </div>
  );
};
