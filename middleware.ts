export { authMiddleware } from "@clerk/nextjs";
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};