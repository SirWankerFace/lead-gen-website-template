import React from "react";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
