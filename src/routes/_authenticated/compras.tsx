import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon, pageHead } from "@/components/app/route-bits";

export const Route = createFileRoute("/_authenticated/compras")({
  head: () => pageHead("Compras", "Mercancía que llegó de los proveedores."),
  component: () => <ComingSoon title="Compras" text="Mercancía que llegó de los proveedores." />,
});
