import Logo from "../assets/logo.svg";
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

  const textColor = transparent ? "text-white" : "text-accent";

  const leadingItems = [
    <Button variant="icon" icon={<img src={Logo} className="h-8" />}>
      <p className={`text-xl ${textColor}`}>{"OneGate"}</p>
    </Button>,
  ];

  const trailingItems = [
    <div className="hidden md:flex gap-8 mx-8">
      {links.map((link, index) => (
        <Button variant="icon" href={link.href} key={index}>
          {link.label}
        </Button>
      ))}
    </div>,
    <Button href="/login" variant={transparent ? "lightBorder" : undefined}>
      Login
    </Button>,
    <Button href="/login" variant="primary" className="ml-4">
      Sign Up
    </Button>,
  ];

  return (
    <Header
      transparent={transparent}
      leading={leadingItems}
      trailing={trailingItems}
    ></Header>
  );
};

export default NavBar;
