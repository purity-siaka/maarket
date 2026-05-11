declare module "framer-motion" {
  // Minimal typing to satisfy TS when @types/framer-motion (or built-in types) aren't available.
  // For full typings, install the official package types.
  import * as React from "react";

  export type MotionProps = Record<string, unknown>;

  export const motion: {
    div: React.ComponentType<MotionProps & React.HTMLAttributes<HTMLDivElement>>;
    span: React.ComponentType<MotionProps & React.HTMLAttributes<HTMLSpanElement>>;
    [key: string]: React.ComponentType<MotionProps>;
  };
}

