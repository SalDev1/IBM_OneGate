import { Link, NavLink } from "react-router-dom";

type ButtonProps = {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
  indicateActive?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

type ButtonVariant = "primary" | "icon" | "secondary" | "inactive" | "active";

export default function Button({
  variant,
  icon,
  children,
  className,
  href,
  indicateActive,
  ...props
}: ButtonProps) {
  if (href && indicateActive)
    return (
      <NavLink
        to={href}
        className={({ isActive }) =>
          `button ${isActive ? "active" : "inactive"} ${className} `
        }
      >
        {icon} {children}
      </NavLink>
    );

  if (href)
    return (
      <Link to={href} className={`button ${variant} ${className}`}>
        {icon} {children}
      </Link>
    );

  return (
    <button className={`${variant} ${className}`} {...props}>
      {icon} {children}
    </button>
  );
}
