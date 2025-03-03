import { FC } from "react";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  className?: string;
  bgColor?: string;
  outline?: boolean;
}

export const Btn: FC<BtnProps> = ({
  icon,
  children,
  className,
  bgColor,
  outline,
  ...props
}) => {
  return (
    <button
      className={`${outline ? `ui-btn ui-btn-outline ${!!bgColor ? bgColor : "ui-btn-success"}` : `ui-btn ${!!bgColor ? bgColor : "ui-bg-green_vetone hover:ui-bg-green-600 ui-text-white"} ui-border-none ${className}`} `}
      {...props}
    >
      {icon && <span className="icon">{icon}</span>}
      {children}
    </button>
  );
};
