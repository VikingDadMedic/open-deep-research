// Middleware is disabled to allow public access
// If you want to re-enable authentication, uncomment the lines below:

// import NextAuth from 'next-auth';
// import { authConfig } from '@/app/(auth)/auth.config';
// export default NextAuth(authConfig).auth;

// Empty default export to satisfy Next.js middleware requirements
export default function middleware() {
  // No authentication required - all routes are publicly accessible
}

export const config = {
  matcher: ['/', '/:id', '/api/:path*', '/login', '/register'],
};
