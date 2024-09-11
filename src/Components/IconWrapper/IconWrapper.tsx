import React from "react";
import { IconType } from "react-icons";

interface IconWrapperProps {
  Icon: IconType;
  size?: number;
  color?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ Icon, size, color }) => {
  return <Icon size={size} color={color} />;
};

export default IconWrapper;
