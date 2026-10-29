import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";
import { useEffect } from "react";

import type { CSSProperties } from "react";
import type { Route } from "./+types/root";
import siteBg from "./assets/IMG_5645.jpeg?responsive";
import portalBg from "./assets/IMG_5667.jpg?responsive";
import { CursorFx } from "./components/cursor-fx";
import { ExperimentsPopup } from "./components/experiments-popup";
import { TopBarTransitionSync } from "./components/top-bar-transition-sync";
import { clearProjectMorph, PROJECT_MORPH_MS } from "./lib/project-morph";
import "./app.css";

export const links: Route.LinksFunction = () => [];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      style={
        {
          "--site-bg": `url("${siteBg.large}")`,
          "--site-bg-small": `url("${siteBg.src}")`,
          "--portal-bg": `url("${portalBg.large}")`,
        } as CSSProperties
      }
    >
      <head>
        <title>Bernice Wang</title>
        <meta
          name="Bernice 'Bern' Wang"
          content="Creative of games, movement, and media."
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="site-bg site-bg--hold" aria-hidden="true" />
        <div className="site-bg" aria-hidden="true" />
        {children}
        <div className="page-portal" aria-hidden="true" />
        <CursorFx />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();

  // The portal flash is only painted inside a view transition, so the browser
  // wouldn't fetch it until the first one starts. Load and decode it while idle.
  useEffect(() => {
    const warm = () => {
      const img = new Image();
      img.src = portalBg.large;
      img.decode().catch(() => {});
    };
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(warm, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(warm, 500);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (location.pathname.startsWith("/project")) return;

    const id = window.setTimeout(() => {
      clearProjectMorph();
    }, PROJECT_MORPH_MS + 400);

    return () => window.clearTimeout(id);
  }, [location.key, location.pathname]);

  return (
    <>
      <TopBarTransitionSync />
      <Outlet />
      <ExperimentsPopup />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
