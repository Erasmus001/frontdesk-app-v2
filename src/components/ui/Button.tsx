import { FC } from "react";

type ButtonProp = {
  onClick?: () => void;
  color?: string;
  variant?: "default" | "outlined" | "filled";
  type?: "submit" | "reset" | "button";
  bgColor?: string;
  children: React.ReactNode;
};

const Button: FC<ButtonProp> = ({
  onClick,
  color,
  variant = "filled",
  type = "button",
  bgColor,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{
        backgroundColor: `${
          variant === "outlined"
            ? "white"
            : variant === "filled"
            ? "#2d0ce8"
            : variant === "default"
            ? bgColor
            : bgColor
        }`,
        border: `${
          variant === "outlined"
            ? "2px solid #3D79F3"
            : variant === "default"
            ? "none"
            : variant === "filled"
            ? "none"
            : color
        }`,
        outline: `${variant === "default" && "none"}`,
        color: `${
          variant === "default"
            ? "white"
            : variant === "filled"
            ? "white"
            : variant === "outlined"
            ? "#3D79F3"
            : color
        }`,
        width: "100%",
      }}
      className={`w-full px-8 py-2 hover:opacity-80 text-base`}
    >
      {children}
    </button>
  );
};

export default Button;
