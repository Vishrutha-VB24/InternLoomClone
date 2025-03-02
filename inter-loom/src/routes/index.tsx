import HomePage from '@/components/HomePage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="">
      
      <HomePage></HomePage>
    </div>
  )
}