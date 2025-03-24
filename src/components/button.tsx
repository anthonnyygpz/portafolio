import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  title?: string;
  target?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  download?: string;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  className,
  onClick,
  target,
  title,
  onMouseLeave,
  onMouseEnter,
  download,
}) => {
  if (href) {
    return (
      <Link
        download={download}
        to={href}
        className={`justify-center flex items-center ${className}`}
        onClick={onClick}
        target={target}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={`justify-center flex items-center ${className}`}
        type="button"
        onClick={onClick}
        title={title}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </button>
    );
  }
};
