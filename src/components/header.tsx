import Button from "./button";
import { GrMenu as MenuIcon } from "react-icons/gr";

type AppBarProps = {
  title?: string;
  children?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  transparent?: boolean;
};

function ToggleButton() {
  return (
    <Button
      className="md:hidden"
      variant="icon"
      icon={<MenuIcon className="w-6 h-6" />}
      onClick={() => {}}
    />
  );
}

const styles = {
  header: "flex p-4",
  aside: "flex flex-grow basis-0 min-w-0",
  title: "text-xl text-accent",
  nav: "flex items-center justify-center",
  section: "flex flex-grow basis-0 min-w-0 justify-end",
  position: {
    fixed: "fixed top-0 z-10 w-screen text-white",
    sticky: "sticky top-0",
  },
  background: {
    material: "backdrop-blur-xl bg-white/60 border-b border-slate-200 shadow",
    shadow: "bg-gradient-to-b from-black/30 to-black/0",
  },
};

export default function AppBar(props: AppBarProps) {
  const positionStyles = props.transparent
    ? `${styles.position.fixed} ${styles.background.shadow}`
    : `${styles.position.sticky} ${styles.background.material}`;

  return (
    <header className={`${styles.header} ${positionStyles}`}>
      <aside className={styles.aside}>
        <ToggleButton />
        {props.leading}
        <p className={styles.title}>{props.title}</p>
      </aside>
      <nav className={styles.nav}>{props.children}</nav>
      <section className={styles.section}>{props.trailing}</section>
    </header>
  );
}

// const ThemedAppBar: React.FC<AppBarProps> = ({
//   title,
//   trailingItems,
//   centerItems,
//   transparent,
// }) => {
//   const containerStyles =
//     "top-0 p-4 z-10 w-full grid sm:grid-cols-2 md:grid-cols-3 grid-rows-1 " +
//     (transparent
//       ? "fixed shadow-bg text-white "
//       : "sticky backdrop-blur-xl backdrop-saturate-150 shadow-lg border-b border-slate-300 bg-white/70");

//   return (
//     <header className={containerStyles}>
//       <aside className="flex">
//         <ButtonToggleMenu />
//         <ButtonHome title={title} transparent={transparent} />
//       </aside>
//       <nav className="hidden md:flex justify-center ">{centerItems}</nav>
//       <section className="flex gap-4 flex-row-reverse">{trailingItems}</section>
//     </header>
//   );
// };
