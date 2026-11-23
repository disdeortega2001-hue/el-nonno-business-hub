import { createFileRoute } from "@tanstack/react-router";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";
import { ComingSoon, pageHead } from "@/components/app/route-bits";

const searchSchema = z.object({
  tipo: fallback(z.enum(["cotizacion", "pedido", "factura"]), "pedido").default("pedido"),
});

export const Route = createFileRoute("/_authenticated/ventas_/nuevo")({
  validateSearch: zodValidator(searchSchema),
  head: () => pageHead("Nuevo documento", "Asistente para crear una cotización, un pedido o una factura."),
  component: () => <ComingSoon title="Nuevo documento" text="Asistente para crear una cotización, un pedido o una factura." />,
});
