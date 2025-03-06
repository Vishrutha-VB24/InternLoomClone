import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <header>
        <Navbar />
      </header>

      <main className="flex-1">
        <Outlet /> {/* This will render the current page */}
      </main>

      <footer>
        <Footer />
      </footer>

      <TanStackRouterDevtools />
    </>
  ),
});
