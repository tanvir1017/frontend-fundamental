import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="h-screen w-full max-w-[1200px] mx-auto">{children}</div>
  );
};

export default Container;
