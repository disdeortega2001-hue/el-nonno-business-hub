import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon, pageHead } from "@/components/app/route-bits";

export const Route = createFileRoute("/_authenticated/productos")({
  head: () => pageHead("Productos", "Catálogo con precios al detal y al mayor, costos y presentaciones."),
  component: () => <ComingSoon title="Productos" text="Catálogo con precios al detal y al mayor, costos y presentaciones." />,
});
