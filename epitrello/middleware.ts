import { NextResponse } from 'next/server';

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/',
]);

const isLoggedOutOnlyRoute = createRouteMatcher([
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/',
]);

export default clerkMiddleware(async (auth, req) => {
    const { userId } = await auth();

    if (isLoggedOutOnlyRoute(req) && userId) {
        return NextResponse.redirect(new URL('/select-org', req.url));
    }
    if (!isPublicRoute(req) && !userId) {
      await auth.protect()
    }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};