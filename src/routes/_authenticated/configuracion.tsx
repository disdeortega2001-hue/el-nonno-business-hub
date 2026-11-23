import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon, pageHead } from "@/components/app/route-bits";

export const Route = createFileRoute("/_authenticated/configuracion")({
  head: () => pageHead("Configuración", "Tasa BCV, datos de la empresa, categorías y usuarios."),
  component: () => <ComingSoon title="Configuración" text="Tasa BCV, datos de la empresa, categorías y usuarios." />,
});
