// app/login/page.tsx
'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const error_type = searchParams.get('error');

  // Map error codes to user-friendly messages
  const getErrorMessage = () => {
    if (error_type === 'AccessDenied') {
      return '! Access denied. Only authorized admin Google accounts can login.';
    }
    if (error_type === 'Callback') {
      return 'Authentication failed. Please try again.';
    }
    if (error) {
      return error;
    }
    return null;
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const result = await signIn('google', {
        redirect: false,
      });

      if (result?.error) {
        // Check if the error is due to not being in allowed admin list
        if (result.error === 'AccessDenied') {
          setError('! Access denied. Only authorized admin Google accounts can access the dashboard.');
        } else {
          setError(result.error || 'An error occurred during sign in.');
        }
      } else if (result?.ok) {
        router.push('/admin/dashboard');
        router.refresh();
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again!');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image - Optimized */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/login/footer.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="w-full max-w-md px-6 pt-8">
          <div className="bg-linear-to-br from-cyan-950 to-transparent backdrop-blur-sm rounded-lg shadow-2xl p-8 space-y-8 border-2 border-cyan-700">
            {/* Header */}
            <div className="text-center space-y-2">
              <p className="text-4xl! font-medium! text-white">Admin Login</p>
            </div>

            {/* Error Message */}
            {getErrorMessage() && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-700 text-center">{getErrorMessage()}</p>
              </div>
            )}

            {/* Info Message */}
            <div className="bg-cyan-600/20 rounded-lg py-2 text-cyan-400 px-2 flex flex-row justify-around items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield-check-icon lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
              <p className="flex text-[13px]! text-cyan-400 text-center">
                Only authorized Google accounts can access.
              </p>
            </div>

            {/* Google Sign In Button */}
            <button
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 hover:border-gray-500 text-gray-700 font-semibold py-3 px-4 mb-12 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-700 rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span>Sign in with Google</span>
                </>
              )}
            </button>

            {/* Footer */}
            <div className="pt-4 border-t border-cyan-700">
              <p className="text-sm! text-brand-yellow text-center">
                Royal Travelers Sri Lanka
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}