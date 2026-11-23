import { createFileRoute } from "@tanstack/react-router";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";
import { ComingSoon, pageHead } from "@/components/app/route-bits";

const searchSchema = z.object({
  tab: fallback(z.enum(["cotizacion", "pedido", "factura"]), "factura").default("factura"),
});

export const Route = createFileRoute("/_authenticated/ventas")({
  validateSearch: zodValidator(searchSchema),
  head: () => pageHead("Ventas", "Cotizaciones, pedidos y facturas."),
  component: () => <ComingSoon title="Ventas" text="Cotizaciones, pedidos y facturas." />,
});
