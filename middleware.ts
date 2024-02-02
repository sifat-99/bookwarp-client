export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard/:path*", '/exchange','/bookmark','/addBook'] }










// import { sessionStatus } from '@/utils/session'
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// const isLoggedIn : boolean = false;

// const protectedRouter = ['/dashboard', '/dashboard/profile', '/dashboard/setting', '/exchange','contactUs']
 
// export function middleware(req: any) {
//   if(!sessionStatus && protectedRouter.includes(req.nextUrl.pathname)) {
//     const absoluteURL = new URL("/login", req.nextUrl.origin)
//     return NextResponse.redirect(absoluteURL.toString())
//   }
// }