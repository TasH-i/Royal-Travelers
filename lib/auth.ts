// lib/auth.ts
import type { NextAuthOptions } from 'next-auth';
import type { Session } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectDB } from './db';
import User from '../models/User';
import type { JWT } from 'next-auth/jwt';

const ALLOW_ADMIN_EMAILS = (process.env.ALLOW_ADMIN_EMAILS || '')
  .split(',')
  .map((email) => email.trim().toLowerCase());

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async signIn({ user, account }) {
      try {
        await connectDB();

        if (!user.email) {
          return false;
        }

        const email = user.email.toLowerCase();
        const isAdminEmail = ALLOW_ADMIN_EMAILS.includes(email);

        // Only allow admin emails to sign in
        if (!isAdminEmail) {
          return false;
        }

        // Find or create user in database
        let dbUser = await User.findOne({ email });

        if (!dbUser) {
          dbUser = await User.create({
            email,
            name: user.name || 'Admin',
            image: user.image,
            googleId: account?.providerAccountId || '',
            role: 'admin',
          });
        } else {
          // Update user info if changed
          dbUser.name = user.name || dbUser.name;
          dbUser.image = user.image || dbUser.image;
          await dbUser.save();
        }

        return true;
      } catch (error) {
        console.error('SignIn error:', error);
        return false;
      }
    },

    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.email = token.email as string;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};