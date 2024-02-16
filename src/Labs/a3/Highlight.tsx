import { ReactNode } from "react";
import React from "react";

function Highlight({ children }: { children: ReactNode }) {
  return (
    <span style={{ backgroundColor: "yellow", color: "red" }}>
      {children}
    </span>
  );
}
export default Highlight;