import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/user(.*)", "/linkedin-url","/themes(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  // matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
  matcher: [
    // Match all routes except /api routes, static files, and Next.js internals
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
