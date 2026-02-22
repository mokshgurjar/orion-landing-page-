"use client";

import { FC, ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface ComponentProps {
  title: string;
  description: string[];
  icon?: ReactNode;
  children?: ReactNode;
}

const Component: FC<ComponentProps> = ({ title, description, icon, children }) => {
  return (
    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 h-full">
      <Card className="text-white rounded-2xl border border-white/10 bg-gradient-to-br from-[#010101] via-[#090909] to-[#010101] shadow-2xl relative backdrop-blur-xl overflow-hidden hover:border-white/25 hover:shadow-white/5 hover:shadow-3xl w-full h-full flex flex-col">
        
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
        </div>

        <div className="p-8 relative z-10 flex flex-col flex-grow items-center text-center">
          <div className="relative mb-6 flex items-center justify-center p-4">
            <div className="w-24 h-24 flex items-center justify-center rounded-full backdrop-blur-lg border border-white/20 bg-[#090909] shadow-2xl relative z-10 transition-colors duration-500 group-hover:border-white/40">
              {icon}
            </div>
          </div>

          <h3 className="mb-4 text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-300">
            {title}
          </h3>

          <div className="space-y-1 max-w-sm flex-grow">
            {description.map((line, idx) => (
              <p
                key={idx}
                className="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300"
              >
                {line}
              </p>
            ))}
          </div>

          <div className="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 mb-6"></div>

          {children && <div className="w-full z-20 relative">{children}</div>}
        </div>
      </Card>
    </div>
  );
};

export default Component;
