// import { useEffect, useState } from "react";
// import { account } from "./conf/conf";
// import Login from "./components/Login";

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     account.get()
//       .then(setUser)
//       .catch(() => setUser(null)); // If not logged in, set to null
//   }, []);

//   return (
//     <div>
//       {user ? <h2>Welcome, {user.name || user.email}!</h2> : <Login />}
//     </div>
//   );
// }

// // export default App;


import {createRouter, RouterProvider} from "@tanstack/react-router";
import {routeTree} from "@/routeTree.gen.ts";
import useAuthStore, {AuthStoreType} from "@/store/authStore.ts"
import {useEffect} from "react";
import authService from "@/appwrite/auth.ts";


const router = createRouter({
  routeTree,
  context: {
    auth: undefined! as AuthStoreType
  }
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
function App() {
  const auth = useAuthStore();
  useEffect(() => {
    authService.getCurrentUser()
      .then((user) => {
        if(user) auth.setUserInfo(user);
        else auth.clearUserInfo();
      })
  }, []);
  return (
    <RouterProvider router={router} context={{auth}}/>
  )
}

export default App