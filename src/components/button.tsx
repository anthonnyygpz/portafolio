import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  className,
  onClick,
}) => {
  if (href) {
    return (
      <Link
        to={href}
        // className={`py-1 px-2 justify-center flex items-center ${className}`}
        onClick={onClick}
      >
        <div
          className={`py-1 px-2 justify-center flex items-center ${className}`}
        >
          {children}
        </div>
      </Link>
    );
  } else {
    return (
      <button
        className={`${className}`}
        // className={`py-1 px-2  justify-center flex items-center `}
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
};
