import { Link as RadixLink } from "@radix-ui/themes";
import NextLink, { LinkProps } from "next/link";
import React from "react";

export const Link = (props: React.PropsWithChildren<LinkProps>) => {
  return (
    <RadixLink asChild>
      <NextLink {...props}>{props.children}</NextLink>
    </RadixLink>
  );
};
