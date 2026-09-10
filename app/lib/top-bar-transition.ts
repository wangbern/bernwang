export type TopBarTransitionMode = "persist" | "fade-in" | "fade-out";

export function pathHasTopBar(pathname: string) {
  return pathname !== "/";
}

/** Set before navigation so VT CSS resolves correctly at capture time. */
export function setTopBarTransitionMode(mode: TopBarTransitionMode) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.topBar = mode;
}

export function topBarModeForNavigation(fromPath: string, toPath: string): TopBarTransitionMode {
  const from = pathHasTopBar(fromPath);
  const to = pathHasTopBar(toPath);
  if (from && to) return "persist";
  if (from && !to) return "fade-out";
  return "fade-in";
}
