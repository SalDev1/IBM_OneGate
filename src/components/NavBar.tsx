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
      <p className={`text-xl hidden md:visible ${textColor}`}>OneGate</p>
    </Button>,
  ];

  const navLinks = links.map((link, index) => (
    <Button variant="icon" href={link.href} key={index}>
      {link.label}
    </Button>
  ));

  const trailingItems = [
    <div className="hidden md:flex gap-8 mx-8">{navLinks}</div>,
    <Button href="/login" variant={transparent ? "lightBorder" : undefined}>
      <p className="">Login</p>
    </Button>,
    <Button href="/signup" variant="primary" className="ml-4">
      <p className="text-nowrap">Sign Up</p>
    </Button>,
  ];

  return (
    <Header
      transparent={transparent}
      leading={leadingItems}
      trailing={trailingItems}
    >
      <div className="md:hidden flex flex-col gap-4">{navLinks}</div>
    </Header>
  );
};

export default NavBar;
