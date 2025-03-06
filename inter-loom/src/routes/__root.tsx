import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
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
  ),
});
