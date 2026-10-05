export type ProjectMorphDirection = "enter" | "exit";

/** Title of the project participating in the active morph (module state). */
let activeMorphTitle: string | null = null;

/**
 * When false, exit morph is skipped (e.g. hero scrolled off-screen) so the
 * image doesn’t fly in from the top of the page.
 */
let morphEnabled = true;

/** Match the CSS view-transition duration so enter→exit handoff doesn’t clip mid-flight. */
export const PROJECT_MORPH_MS = 1800;

export function projectHref(title: string): string {
  return `/project?${new URLSearchParams({ title }).toString()}`;
}

function syncMorphDirection(direction: ProjectMorphDirection | "exit-blocked") {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.projectMorph = direction;
}

/**
 * Call on card click (`enter`) or while on a project (`exit`) so only one
 * card claims the shared names and CSS can pick the right snapshot.
 */
export function prepareProjectMorph(
  title: string,
  direction: ProjectMorphDirection = "enter",
) {
  activeMorphTitle = title;
  syncMorphDirection(morphEnabled || direction === "enter" ? direction : "exit-blocked");
  if (direction === "enter") {
    morphEnabled = true;
    syncMorphDirection("enter");
  }
}

/** Drop shared names after a morph settles so idle cards don’t stay peeled out of root. */
export function clearProjectMorph() {
  activeMorphTitle = null;
  morphEnabled = true;
  spectrumReturn = false;
  if (typeof document === "undefined") return;
  delete document.documentElement.dataset.projectMorph;
  delete document.documentElement.dataset.spectrumMorph;
}

/** The open project was entered from the experiments cubes. */
let spectrumReturn = false;

export function markSpectrumReturn() {
  spectrumReturn = true;
}

function armSpectrumExit() {
  if (!spectrumReturn || typeof document === "undefined") return;
  if (location.pathname !== "/experiments") return;
  document.documentElement.dataset.spectrumMorph = "exit";
}

if (typeof window !== "undefined") {
  window.addEventListener("popstate", armSpectrumExit, true);
  document.addEventListener(
    "click",
    (event) => {
      if (!spectrumReturn) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!link) return;
      let path = "";
      try {
        path = new URL(link.href, location.origin).pathname;
      } catch {
        return;
      }
      if (path !== "/experiments") return;
      document.documentElement.dataset.spectrumMorph = "exit";
    },
    true,
  );
}

/**
 * Gate reverse morph while the project hero is (or isn’t) on screen.
 * When blocked, destination cards must not claim shared names — otherwise
 * they morph in alone and jump from a wrong origin.
 */
export function setProjectExitMorphEnabled(enabled: boolean) {
  morphEnabled = enabled;
  if (!activeMorphTitle || typeof document === "undefined") return;
  if (document.documentElement.dataset.projectMorph === "enter") return;
  syncMorphDirection(enabled ? "exit" : "exit-blocked");
}

export function isProjectMorphEnabled(): boolean {
  return morphEnabled;
}

export function isActiveProjectMorph(title: string): boolean {
  return activeMorphTitle === title;
}

export function getProjectMorphDirection(): ProjectMorphDirection | null {
  if (!activeMorphTitle) return null;
  if (typeof document === "undefined") return null;
  const value = document.documentElement.dataset.projectMorph;
  return value === "enter" || value === "exit" ? value : null;
}
