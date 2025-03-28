import SignIn from '@/components/SignIn'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/signin')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <>
        <SignIn></SignIn>
    </>
  )
}
