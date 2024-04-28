import React from "react";
import AppBar from "./components/header";
import { useLocation } from "react-router-dom";
import Button from "./components/button";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}

// shell.tsx --> index.tsx file.