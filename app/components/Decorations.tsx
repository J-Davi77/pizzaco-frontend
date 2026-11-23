import Image from "next/image";

export function TomatoesDecoration() {
  return (
    <Image
      src="/images/tomate.svg"
      alt=""
      aria-hidden="true"
      width={800}
      height={800}
      priority
      className="start-decor start-decor--top-right object-contain object-right-top"
    />
  );
}

export function LeavesDecoration() {
  return (
    <Image
      src="/images/folha.svg"
      alt=""
      aria-hidden="true"
      width={800}
      height={800}
      priority
      className="start-decor start-decor--bottom-left object-contain object-left-bottom"
    />
  );
}
