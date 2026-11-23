import Image from "next/image";
import Link from "next/link";
import {
  LeavesDecoration,
  TomatoesDecoration,
} from "./components/Decorations";

export default function Home() {
  return (
    <main className="start-screen">
      <TomatoesDecoration />
      <LeavesDecoration />

      <div className="start-content">
        <Image
          src="/images/logo.svg"
          alt="PizzaCo"
          width={1200}
          height={500}
          priority
          className="start-logo"
        />

        <Link href="/tipo-pedido" className="start-button">
          Comece o seu Pedido!
        </Link>
      </div>
    </main>
  );
}