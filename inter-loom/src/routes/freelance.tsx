import Freelance from '@/components/Freelance'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/freelance')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><Freelance></Freelance></div>
}
