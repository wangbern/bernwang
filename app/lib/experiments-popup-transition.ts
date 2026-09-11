export type ExperimentsPopupTransitionMode = "persist" | "fade-in" | "fade-out";

export function pathHasExperimentsPopup(pathname: string) {
  return pathname !== "/experiments";
}

export function experimentsPopupIsOpen() {
  return (
    typeof document !== "undefined" &&
    Boolean(document.querySelector(".experiments-popup"))
  );
}

/** Set before navigation so VT CSS resolves correctly at capture time. */
export function setExperimentsPopupTransitionMode(
  mode: ExperimentsPopupTransitionMode,
) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.experimentsPopup = mode;
}

export function experimentsPopupModeForNavigation(
  fromPath: string,
  toPath: string,
): ExperimentsPopupTransitionMode {
  const open = experimentsPopupIsOpen();
  const from = open && pathHasExperimentsPopup(fromPath);
  const to = pathHasExperimentsPopup(toPath);
  if (from && to) return "persist";
  if (from && !to) return "fade-out";
  return "fade-in";
}
