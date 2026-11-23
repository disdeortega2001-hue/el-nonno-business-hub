import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon, pageHead } from "@/components/app/route-bits";

export const Route = createFileRoute("/_authenticated/clientes")({
  head: () => pageHead("Clientes", "Clientes al detal y al mayor, crédito y recordatorios de pago."),
  component: () => <ComingSoon title="Clientes" text="Clientes al detal y al mayor, crédito y recordatorios de pago." />,
});
