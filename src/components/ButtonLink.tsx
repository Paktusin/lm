import clsx from "clsx";
import React from "react";
import { Link, LinkProps } from "react-router-dom";

export interface IButtonLinkProps extends LinkProps {}

export const ButtonLink: React.FC<IButtonLinkProps> = ({ ...props }) => {
  return <Link {...props} className={clsx("btn", props.className)}></Link>;
};
