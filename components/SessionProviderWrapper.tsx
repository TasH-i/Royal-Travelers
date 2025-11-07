'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export default function SessionProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  // Hide Header and Footer on these routes
  const hideHeaderFooter = pathname === '/login' || pathname.startsWith('/admin');

  return (
    <SessionProvider>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </SessionProvider>
  );
}