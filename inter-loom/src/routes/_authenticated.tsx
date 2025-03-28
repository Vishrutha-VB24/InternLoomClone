import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: ({ context, location }) => {
    // List of public routes that should not be redirected
    const publicRoutes = ['/signup', '/register', '/signin', '/login'];

    // @ts-ignore
    if (!context.auth.userInfo && !publicRoutes.includes(location.pathname)) {
      throw redirect({
        to: '/login',
        search: { redirect: location.pathname },
      });
    }
  },
});
