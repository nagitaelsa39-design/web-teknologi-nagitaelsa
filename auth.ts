import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [], // Tambahkan provider Anda di sini (misal: Credentials, Google, dll)
});