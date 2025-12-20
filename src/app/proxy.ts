import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Minimal "protected route" proxy.
 * For Phase 1 this checks for a Supabase auth cookie-like value.
 *
 * Once real Supabase auth is implemented, this starts working automatically
 * because Supabase will set auth cookies.
 */
function hasSupabaseAuthCookie(req: NextRequest) {
    const names = req.cookies.getAll().map((c) => c.name);

    return (
        names.some((n) => n === "supabase-auth-token") ||
        names.some((n) => n === "sb-access-token") ||
        names.some((n) => n === "sb-refresh-token") ||
        (names.some((n) => n.startsWith("sb-")) && names.some((n) => n.endsWith("-auth-token")))
    );
}

export async function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Protect only /dashboard (and nested routes under it later)
    if (pathname.startsWith("/dashboard")) {
        const authed = hasSupabaseAuthCookie(req);

        if (!authed) {
            const url = req.nextUrl.clone();
            url.pathname = "/login";
            url.searchParams.set("next", pathname);
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};
