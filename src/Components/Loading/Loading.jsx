import React, { useEffect } from "react";

export default function Loading() {



  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 dark:bg-gray-900/80">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Loading...
        </p>
      </div>
    </div>
  );
}
