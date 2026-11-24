import Image from "next/image";
import Link from "next/link";

type TypeCardProps = {
  href: string;
  title: string;
  imageSrc: string;
};

export function TypeCard({ href, title, imageSrc }: TypeCardProps) {
  return (
    <Link href={href} className="choice-card">
      <span className="choice-card__title">{title}</span>
      <Image
        src={imageSrc}
        alt=""
        aria-hidden="true"
        width={400}
        height={400}
        className="choice-card__image"
      />
    </Link>
  );
}
