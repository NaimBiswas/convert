import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale } from "@/lib/links";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/" || pathname === "") {
    return NextResponse.rewrite(new URL(`/${defaultLocale}/`, request.url));
  }

  const first = pathname.split("/")[1];
  if (first && isLocale(first)) {
    return NextResponse.next();
  }

  const target = `/${defaultLocale}${pathname === "/" ? "/" : pathname}`;
  return NextResponse.rewrite(new URL(target, request.url));
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|images|manifest.json|robots.txt|ads.txt|og-image.png|sw.js|firebase-messaging-sw.js|favicon.ico|_headers).*)",
  ],
};
