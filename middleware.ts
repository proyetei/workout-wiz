// import { clerkMiddleware } from '@clerk/nextjs';
import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: [
    "/",
  ],
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};