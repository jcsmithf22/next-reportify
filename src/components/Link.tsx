import { Link as RadixLink } from "@radix-ui/themes";
import NextLink, { LinkProps } from "next/link";
import React from "react";

interface CustomLinkProps extends React.PropsWithChildren<LinkProps> {
  color?: "gray" | "jade";
  className?: string;
}

export const Link = ({
  color = "jade",
  className,
  ...props
}: CustomLinkProps) => {
  return (
    <RadixLink color={color} asChild>
      <NextLink className={className} {...props}>
        {props.children}
      </NextLink>
    </RadixLink>
  );
};
