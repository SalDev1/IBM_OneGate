import React from "react";
import AppBar from "./components/header";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function AppShell({ children }: { children: React.ReactNode }) {

  let { pathname } = useLocation()
  let transparent = pathname == "/"


  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const centerAppBarItems = <div className="">
    {links.map((link, index) => (
      <NavLink to={link.href} key={index} className={({ isActive }) => {
        const classes = "transition-all px-9 py-3 rounded-full"
        return classes + (isActive ? " font-medium bg-white text-black shadow-lg" : "")
      }}>
        {link.label}
      </NavLink >
    ))}
  </div >


  const trailingAppBarItems = [
    <Link to="/signup" className="text-center bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl shadow-blue-700/60 hover:shadow-blue-700/40 text-white px-8 py-2 rounded-full transition-all">
      Sign Up
    </Link>,
    <Link to="/login" className={"text-center border px-8 py-2 rounded-full transition-all " + (transparent ? "border-slate-100/30 hover:bg-slate-100/30" : " border-slate-500/30 hover:bg-slate-500/30")}>
      Login
    </Link>
  ];

  return <>
    <AppBar transparent={transparent} title="OneGate" centerItems={centerAppBarItems} trailingItems={trailingAppBarItems} />
    {children}
  </>
}
