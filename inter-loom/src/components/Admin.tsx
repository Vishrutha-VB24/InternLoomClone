// import { lazy, Suspense } from "react";
// import { createRootRoute, createRoute, RouterProvider } from "@tanstack/react-router";
// import { createRouter } from "@tanstack/react-router";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Outlet, Link } from "@tanstack/react-router";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// // Lazy loading components with correct paths
// const Dashboard = lazy(() => import("@/pages/Dashboard"));
// const Users = lazy(() => import("@/pages/Users"));
// const Settings = lazy(() => import("@/pages/Settings"));
// const NotFound = lazy(() => import("@/pages/NotFound"));

// // Sample Data for Dashboard
// const data = [
//   { name: "Jan", users: 400 },
//   { name: "Feb", users: 600 },
//   { name: "Mar", users: 800 },
//   { name: "Apr", users: 1200 },
// ];

// // Root Layout Component
// const Root = () => {
//   return (
//     <div className="flex h-screen w-full">
//       <Sidebar />
//       <div className="p-6 w-full">
//         <Header />
//         <Suspense fallback={<p>Loading...</p>}>
//           <Outlet />
//         </Suspense>
//       </div>
//     </div>
//   );
// };

// // Sidebar Component
// const Sidebar = () => {
//   return (
//     <div className="w-64 bg-gray-800 text-white h-screen p-4">
//       <h2 className="text-xl font-bold">Admin Panel</h2>
//       <nav>
//         <ul>
//           <li><Link to="/dashboard">Dashboard</Link></li>
//           <li><Link to="/users">Users</Link></li>
//           <li><Link to="/settings">Settings</Link></li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// // Header Component
// const Header = () => {
//   return (
//     <div className="bg-white shadow-md p-4 flex justify-between">
//       <h1 className="text-lg font-bold">Admin Dashboard</h1>
//       <Button>Logout</Button>
//     </div>
//   );
// };

// // Dashboard Component
// const DashboardContent = () => {
//   return (
//     <Card className="p-6">
//       <h2 className="text-lg font-bold mb-4">User Growth</h2>
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={data}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="users" fill="#8884d8" />
//         </BarChart>
//       </ResponsiveContainer>
//     </Card>
//   );
// };

// // Define routes
// const rootRoute = createRootRoute({
//   component: Root,
// });

// const dashboardRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/dashboard",
//   component: DashboardContent,
// });

// const usersRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/users",
//   component: Users,
// });

// const settingsRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/settings",
//   component: Settings,
// });

// const notFoundRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "*",
//   component: NotFound,
// });

// const routeTree = rootRoute.addChildren([dashboardRoute, usersRoute, settingsRoute, notFoundRoute]);
// const router = createRouter({ routeTree });

// export default function App() {
//   return <RouterProvider router={router} />;
// }