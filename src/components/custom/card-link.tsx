import Link from "next/link";
import Card, { CardProps } from "../card";

interface CardLinkProps extends CardProps {
  linkUrl: string;
}

export default function CardLink({
  title,
  imageUrl,
  description,
  className,
  linkUrl,
  arrow = false,
}: CardLinkProps) {
  return (
    <Link
      href={`/${linkUrl}`}
      className="mx-auto w-full max-w-7xl block rounded-3xl "
    >
      <Card
        title={title}
        description={description}
        imageUrl={imageUrl}
        arrow={arrow}
        className={className}
      />
    </Link>
  );
}
