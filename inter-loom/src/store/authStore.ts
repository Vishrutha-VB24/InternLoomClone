import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthStore {
  userInfo: Record<string, unknown> | null;
  login: boolean;
  setUser: (user: Record<string, unknown>) => void;
  clearUser: () => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      userInfo: null,
      login: false,

      setUser: (user) => set({ userInfo: user, login: true }),

      clearUser: () => set({ userInfo: null, login: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore;
export type AuthState = ReturnType<typeof useAuthStore>;
