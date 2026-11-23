import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon, pageHead } from "@/components/app/route-bits";

export const Route = createFileRoute("/_authenticated/reportes")({
  head: () => pageHead("Reportes", "Ventas, lo más vendido, inventario y compras."),
  component: () => <ComingSoon title="Reportes" text="Ventas, lo más vendido, inventario y compras." />,
});
