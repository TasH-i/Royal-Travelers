// lib/auth-utils.ts
import { getServerSession } from 'next-auth';
import { authOptions } from './auth';
import { connectDB } from './db';
import User from '../models/User';

/**
 * Get current session on server side
 */
export async function getCurrentSession() {
  return await getServerSession(authOptions);
}

/**
 * Get current user from database
 */
export async function getCurrentUser() {
  const session = await getCurrentSession();
  if (!session?.user?.email) {
    return null;
  }

  await connectDB();
  const user = await User.findOne({ email: session.user.email });
  return user;
}

/**
 * Check if user is admin
 */
export async function isAdmin() {
  const user = await getCurrentUser();
  return user?.role === 'admin';
}

/**
 * Require authentication (for server actions)
 */
export async function requireAuth() {
  const session = await getCurrentSession();
  if (!session) {
    throw new Error('Unauthorized');
  }
  return session;
}

/**
 * Require admin role (for server actions)
 */
export async function requireAdmin() {
  const session = await getCurrentSession();
  if (!session) {
    throw new Error('Unauthorized');
  }

  const user = await getCurrentUser();
  if (user?.role !== 'admin') {
    throw new Error('Admin access required');
  }

  return session;
}