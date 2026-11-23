import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon, pageHead } from "@/components/app/route-bits";

export const Route = createFileRoute("/_authenticated/mostrador")({
  head: () => pageHead("Mostrador", "Venta rápida: vitrina de productos, ticket y cobro."),
  component: () => <ComingSoon title="Mostrador" text="Venta rápida: vitrina de productos, ticket y cobro." />,
});
