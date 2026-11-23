import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon, pageHead } from "@/components/app/route-bits";

export const Route = createFileRoute("/_authenticated/lista-precios")({
  head: () => pageHead("Lista de precios", "Lista para mandar por WhatsApp, copiar o imprimir en PDF."),
  component: () => <ComingSoon title="Lista de precios" text="Lista para mandar por WhatsApp, copiar o imprimir en PDF." />,
});
