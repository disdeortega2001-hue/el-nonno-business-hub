import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon, pageHead } from "@/components/app/route-bits";

export const Route = createFileRoute("/_authenticated/por-cobrar")({
  head: () => pageHead("Por cobrar", "Facturas con saldo pendiente, agrupadas por cliente."),
  component: () => <ComingSoon title="Por cobrar" text="Facturas con saldo pendiente, agrupadas por cliente." />,
});
