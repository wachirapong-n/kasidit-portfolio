import Link from "next/link";
import Card, { CardProps } from "../card";

interface CardLinkProps extends CardProps {
  linkUrl: string;
}

export default function CardLink({ linkUrl, ...cardProps }: CardLinkProps) {
  return (
    <Link
      href={`/${linkUrl}`}
      className="relative mx-auto w-full max-w-7xl block rounded-3xl group hover:z-50"
    >
      <Card {...cardProps} />
    </Link>
  );
}
