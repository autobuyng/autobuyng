export const AdjustableDashedBorder = ({
  dashLength = 10, // Length of each dash
  dashSpacing = 10, // Space between dashes
  borderWidth = 2, // Border width
  borderColor = '#CBD5E0', // Border color
  borderRadius = 8, // Border radius
  children,
}: {
  dashLength?: number;
  dashSpacing?: number;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative">
      <svg
        className="w-full h-[163px] absolute inset-0"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={borderWidth}
        stroke={borderColor}
        fill="none"
      >
        <rect
          x={borderWidth / 2}
          y={borderWidth / 2}
          width={`calc(100% - ${borderWidth}px)`}
          height={`calc(100% - ${borderWidth}px)`}
          strokeDasharray={`${dashLength},${dashSpacing}`}
          rx={borderRadius}
        />
      </svg>
      <div className="p-8 relative">{children}</div>
    </div>
  );
};
