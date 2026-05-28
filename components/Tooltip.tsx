"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Tooltip({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={(e) => {
        // Prevent linking when clicking the tooltip trigger
        e.preventDefault();
        setIsVisible(!isVisible);
      }}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 z-50 mb-2 w-48 -translate-x-1/2 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-black dark:text-neutral-200 p-3 text-xs shadow-xl border border-neutral-300 dark:border-neutral-700 transition-colors"
          >
            {content}
            <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
