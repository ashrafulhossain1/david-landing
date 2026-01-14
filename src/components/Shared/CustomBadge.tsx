import { Badge } from "@/components/ui/badge";
import React from "react";

interface CustomBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const CustomBadge: React.FC<CustomBadgeProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <Badge
      variant="outline"
      className={`
        flex items-center z-10 gap-2 px-5 py-4 rounded-full bg-[#55A1F229] border border-[#55A1F2] text-primary backdrop-blur-md text-base
        ${className}
        `}
      style={{
        boxShadow: `-11.15px -10.392px 48px -12px rgba(0, 0, 0, 0.15),
                -1.858px -1.732px 12px -8px rgba(0, 0, 0, 0.15),
                2.146px 2.924px 9.24px 0 rgba(255, 255, 255, 0.13) inset,
                1.217px 1.134px 4.62px 0 rgba(255, 255, 255, 0.13) inset`,
      }}
      {...props}
    >
      {children}
    </Badge>
  );
};

export default CustomBadge;
