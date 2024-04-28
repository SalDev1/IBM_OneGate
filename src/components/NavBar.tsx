import React from "react";
import { useLocation } from "react-router-dom";
import Button from "./button";
import Header from "../components/header";

const NavBar = () => {
  let { pathname } = useLocation();
  let transparent = pathname == "/";

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const centerAppBarItems = (
    <div className="hidden md:flex">
      {links.map((link, index) => (
        <Button href={link.href} key={index} indicateActive>
          {link.label}
        </Button>
      ))}
    </div>
  );

  const trailingAppBarItems = [
    <Button href="/login" variant="primary">
      Sign Up
    </Button>,
    <Button href="/login" className={transparent ? "lightBorder" : ""}>
      Login
    </Button>,
  ];

  return (
    <>
     <Header
        transparent={transparent}
        title="OneGate"
        centerItems={centerAppBarItems}
        trailingItems={trailingAppBarItems}
      />
    </>
  )
}

export default NavBar;