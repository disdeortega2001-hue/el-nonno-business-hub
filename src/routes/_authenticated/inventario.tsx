import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon, pageHead } from "@/components/app/route-bits";

export const Route = createFileRoute("/_authenticated/inventario")({
  head: () => pageHead("Inventario", "Existencias, ajustes, mermas, movimientos y vencimientos."),
  component: () => <ComingSoon title="Inventario" text="Existencias, ajustes, mermas, movimientos y vencimientos." />,
});
