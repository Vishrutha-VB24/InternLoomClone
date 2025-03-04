import { createFileRoute } from "@tanstack/react-router";
import Signup from "@/components/SignUp";



export const Route = createFileRoute('/signup')({
  component: SignUp
});

function SignUp() {
  return (
       <>
            <Signup></Signup>
       </>
  );
}


