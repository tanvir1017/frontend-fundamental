import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className, ...rest }: ContainerProps) => {
  return (
    <div
      {...rest}
      className={cn("w-full max-w-[1230px] px-5 mx-auto", className)}
    >
      {children}
    </div>
  );
};

export default Container;
