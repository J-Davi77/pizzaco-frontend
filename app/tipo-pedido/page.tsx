import "./tipo-pedido.css";
import Image from "next/image";
import { LeavesDecoration, TomatoesDecoration } from "../components/Decorations";
import { TypeCard } from "../components/TypeCard";

type OrderType = {
  id: string;
  title: string;
  imageSrc: string;
  href: string;
};

// Ajuste os destinos conforme o fluxo do pedido.
const ORDER_TYPES: readonly OrderType[] = [
  {
    id: "local",
    title: "Para Comer aqui",
    imageSrc: "/images/pizza.svg",
    href: "/cardapio?tipo=local",
  },
  {
    id: "viagem",
    title: "Para Levar",
    imageSrc: "/images/caixa.svg",
    href: "/cardapio?tipo=viagem",
  },
];

export default function TipoPedidoPage() {
  return (
    <main className="start-screen choice-screen">
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

        <h1 className="choice-title">Escolha</h1>

        <ul className="choice-list">
          {ORDER_TYPES.map(({ id, title, imageSrc, href }) => (
            <li key={id}>
              <TypeCard href={href} title={title} imageSrc={imageSrc} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
