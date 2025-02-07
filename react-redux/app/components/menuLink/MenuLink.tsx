"use client";

import Link, { LinkProps } from "next/link";

interface TextLinksProps extends LinkProps {
  texto: string;
  icon?: React.ReactNode;
}

export default function MenuLink({ texto, href, ...rest }: TextLinksProps) {
  return (
    <Link href={href} {...rest}>
      <div className="flex items-center gap-2 text-xl text-white no-underline text-left hover:text-destaque">
        {texto}
      </div>
    </Link>
  );
}
