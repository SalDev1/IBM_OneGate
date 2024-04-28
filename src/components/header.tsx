import { Box, AppBar, Toolbar, IconButton } from "@mui/material";
import Logo from "../assets/logo.svg";
import Button from "./button";
import { useParams } from "react-router-dom";

type ThemedAppBarProps = {
  title: string;
  centerItems?: React.ReactNode;
  trailingItems?: React.ReactNode;
  transparent?: boolean;
};

function ButtonToggleMenu() {
  return <IconButton></IconButton>;
}

type ButtonHomeProps = { title?: string; transparent?: boolean };

function ButtonHome({ title, transparent }: ButtonHomeProps) {
  let textStyles =
    "text-xl hidden md:flex " + (transparent ? "text-white" : "text-[#323EDD]");

  return (
    <Button variant="icon" icon={<img src={Logo} />}>
      <p className={textStyles}>{title}</p>
    </Button>
  );
}

const ThemedAppBar: React.FC<ThemedAppBarProps> = ({
  title,
  trailingItems,
  centerItems,
  transparent,
}) => {

  const containerStyles =
    "top-0 p-4 z-10 w-full grid sm:grid-cols-2 md:grid-cols-3 grid-rows-1 " +
    (transparent
      ? "fixed shadow-bg text-white "
      : "sticky backdrop-blur-xl backdrop-saturate-150 shadow-lg border-b border-slate-300 bg-white/70");

  return (
    <header className={containerStyles}>
      <aside className="flex">
        <ButtonToggleMenu />
        <ButtonHome title={title} transparent={transparent} />
      </aside>
      <nav className="hidden md:flex justify-center ">{centerItems}</nav>
      <section className="flex gap-4 flex-row-reverse">{trailingItems}</section>
    </header>
  );
};

export default ThemedAppBar;
