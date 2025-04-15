import {ReactNode} from "react";
import Image from "next/image";
import clsx from "clsx";

interface ButtonProps {
    children?: ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    bgColor?: string;
    hoverColor?: string;
    height?: string;
    icon?: string;
    iconPosition?: "left" | "right";
    iconAlt?: string;
    iconSize?: number;
    iconWidth?: number;
    iconHeight?: number;
    iconOnly?: boolean;
    hideBorder?: boolean;
}

export default function Button({
                                   children,
                                   className = "",
                                   onClick,
                                   type = "button",
                                   bgColor = "bg-[#FFFFFF]",
                                   hoverColor = "hover:bg-[#B6F4C7]",
                                   height = "h-auto",
                                   icon,
                                   iconPosition = "right",
                                   iconAlt = "Icon",
                                   iconSize = 16,
                                   iconWidth,
                                   iconHeight,
                                   iconOnly = false,
                                   hideBorder = false,
                               }: ButtonProps) {
    const iconW = iconWidth || iconSize;
    const iconH = iconHeight || iconSize;

    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx(
                "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium text-[#333333] transition-colors cursor-pointer",
                iconOnly ? "p-2 w-[42px] h-[42px]" : "px-5 py-2",
                !hideBorder && "border-2 border-[#333333]",
                bgColor,
                hoverColor,
                height,
                className
            )}
        >
            {icon && iconPosition === "left" && (
                <Image src={icon} alt={iconAlt} width={iconW} height={iconH}/>
            )}
            {!iconOnly && children}
            {icon && iconPosition === "right" && (
                <Image src={icon} alt={iconAlt} width={iconW} height={iconH}/>
            )}
        </button>
    );
}
