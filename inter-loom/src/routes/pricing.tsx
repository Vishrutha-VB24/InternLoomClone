import { createFileRoute } from "@tanstack/react-router";
import Pricing from "@/components/Pricing";

export const Route = createFileRoute("/pricing")({
  component: Pricing,
});



