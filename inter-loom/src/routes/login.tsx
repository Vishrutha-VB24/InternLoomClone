import { createFileRoute } from "@tanstack/react-router";
import Login from "@/components/Login";

export const Route = createFileRoute('/login')({
  component: Login,
});

function login() {
  return <Login />;
}