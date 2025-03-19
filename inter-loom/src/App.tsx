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
