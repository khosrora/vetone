import { ReactNode } from "react";

interface AlertProps {
  message: string;
  icon?: ReactNode;
  type?: "info" | "success" | "warning" | "error";
  onDismiss?: () => void;
}

export function Alert({ message, icon, type = "info", onDismiss }: AlertProps) {
  // Determine Daisy UI alert class based on type
  const alertTypeClass = {
    info: "alert-info",
    success: "alert-success",
    warning: "alert-warning",
    error: "alert-error",
  }[type];

  return (
    <div role="alert" className={`ui-alert ${alertTypeClass}`}>
      {/* Icon */}
      {icon || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current h-6 w-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      )}
      {/* Message */}
      <span>{message}</span>
      {/* Dismiss Button (optional) */}
      {onDismiss && (
        <button className="ui-btn ui-btn-sm ui-btn-ghost" onClick={onDismiss}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
