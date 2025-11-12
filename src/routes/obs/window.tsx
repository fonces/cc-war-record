import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/obs/window')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/obs/window"!</div>
}
