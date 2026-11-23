import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon, pageHead } from "@/components/app/route-bits";

export const Route = createFileRoute("/_authenticated/compras_/nueva")({
  head: () => pageHead("Registrar compra", "Factura del proveedor, productos que llegaron y cómo se pagó."),
  component: () => <ComingSoon title="Registrar compra" text="Factura del proveedor, productos que llegaron y cómo se pagó." />,
});
