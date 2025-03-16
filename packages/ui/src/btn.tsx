import { FC } from "react";
import { Loader } from "./loader";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  className?: string;
  bgColor?: string;
  outline?: boolean;
  loading?: boolean;
}

export const Btn: FC<BtnProps> = ({
  icon,
  children,
  className,
  bgColor,
  outline,
  loading,
  ...props
}) => {
  return (
    <button
      className={`${outline ? `ui-btn ui-btn-outline ui-btn-lg ${!!bgColor ? bgColor : "ui-btn-success"}` : `ui-btn ${!!bgColor ? bgColor : "ui-bg-green_vetone hover:ui-bg-green-600 ui-text-white"} ui-border-none ${className}`} `}
      {...props}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          {icon && <span className="icon">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};
