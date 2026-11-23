import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon, pageHead } from "@/components/app/route-bits";

export const Route = createFileRoute("/_authenticated/caja")({
  head: () => pageHead("Caja del día", "Entradas de dinero por forma de pago, cierre del punto y cuadre."),
  component: () => <ComingSoon title="Caja del día" text="Entradas de dinero por forma de pago, cierre del punto y cuadre." />,
});
