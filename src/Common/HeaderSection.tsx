
// @/Common/HeaderSection.tsx
"use client";
import { ReactNode } from "react";

export const HeaderSection = ({ children }: { children?: ReactNode }) => {
  return (
    <header className="flex items-center justify-between px-2 py-3 sm:px-6 md:px-8 lg:px-12 bg-white  w-full ">
      {/* Logo Section */}
      <div className="flex items-center gap-2 w-full">
        <img
          src="/logo-bbg.svg"
          alt="HyperSonic Logo"
          className="h-8 sm:h-9 md:h-10 w-auto"
        />
        <div className="text-left flex-1 min-w-0">
          <h1 className="text-[#175CD3] text-[26px] sm:text-[30px] md:text-[32px] lg:text-[38px] font-bold leading-tight">
            HyperSonic
          </h1>
          <p className="text-gray-500 text-[10px]">
            CONSULTANCY SERVICES PRIVATE LIMITED
          </p>
        </div>
      </div>
      {children}
    </header>
  );
};