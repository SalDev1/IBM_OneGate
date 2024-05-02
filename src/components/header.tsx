import { useState } from "react";
import Button from "./button";
import { GrMenu as MenuIcon } from "react-icons/gr";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

type AppBarProps = {
  title?: string;
  children?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  transparent?: boolean;
};

function ToggleButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      className="md:hidden"
      variant="icon"
      icon={<MenuIcon className="w-6 h-6" />}
      onClick={onClick}
    />
  );
}

const styles = {
  header: "flex p-4",
  aside: "flex md:flex-grow md:basis-0 min-w-0",
  title: "text-xl text-accent",
  nav: "flex items-center justify-center hidden md:flex",
  section: "flex flex-grow basis-0 min-w-0 justify-end",
  position: {
    fixed: "fixed top-0 z-10 w-screen text-white",
    sticky: "sticky top-0",
  },
  background: {
    material: "backdrop-blur-xl bg-white/60 border-b border-slate-200 shadow",
    shadow: "bg-gradient-to-b from-black/30 to-black/0",
  },
  navDrawerContainer: "z-20 fixed top-0 w-screen h-screen flex",
  navDrawer:
    "backdrop-blur-xl backdrop-saturate-150 bg-white/80 text-black w-[300px] h-screen flex shadow-2xl flex flex-col gap-4 p-6",
};

export default function AppBar(props: AppBarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const positionStyles = props.transparent
    ? `${styles.position.fixed} ${styles.background.shadow}`
    : `${styles.position.sticky} ${styles.background.material}`;

  return (
    <>
      <header className={`${styles.header} ${positionStyles}`}>
        <aside className={styles.aside}>
          <ToggleButton onClick={() => setDrawerOpen(true)} />
          {props.leading}
          <p className={styles.title}>{props.title}</p>
        </aside>
        <nav className={`${styles.nav}`}>{props.children}</nav>
        <section className={styles.section}>{props.trailing}</section>
      </header>
      <AnimatePresence>
        {drawerOpen && (
          <motion.aside
            animate={{ backgroundColor: ["#0000", "#0004"] }}
            exit={{ backgroundColor: ["#0004", "#0000"] }}
            className={styles.navDrawerContainer}
          >
            <motion.nav
              style={{ x: "-300px" }}
              animate={{ x: ["-300px", "0"] }}
              exit={{ x: ["0", "-300px"] }}
              className={styles.navDrawer}
              transition={{
                stiffness: 200,
              }}
            >
              <Button
                className="md:hidden w-fit gap-2"
                variant="icon"
                icon={<IoIosCloseCircleOutline className="w-6 h-6" />}
                onClick={() => setDrawerOpen(false)}
              >
                Close
              </Button>
              {props.children}
            </motion.nav>
            <div
              className="flex-grow"
              onClick={() => setDrawerOpen(false)}
            ></div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
