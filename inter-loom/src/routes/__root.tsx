import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { AuthStoreType } from '@/store/authStore';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

interface RouterContext {
  auth: AuthStoreType
}
export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => {
    return (
    <>
      <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>

      {/* Make the main content flexible to push the footer down */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>

      <TanStackRouterDevtools />
    </div>

      
    </>
   );
  },
});
