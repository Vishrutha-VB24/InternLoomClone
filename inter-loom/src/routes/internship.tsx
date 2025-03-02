// import Intership from '@/components/Internship'
// import { createFileRoute } from '@tanstack/react-router'

// export const Route = createFileRoute('/internship')({
//   component: RouteComponent,
// })

// function RouteComponent() {
//   return(
//     <>
//     <Intership></Intership>
//     </>
//   )
// }

import { createFileRoute } from "@tanstack/react-router";
import Internship from "@/components/Internship";

export const Route = createFileRoute("/internship")({
  component: Internship,
});
