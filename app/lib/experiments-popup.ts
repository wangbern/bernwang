const UNIQUE_KEY = "experiments-visited-projects";
const CLICKS_KEY = "experiments-project-clicks";
const FIRST_SHOWN_KEY = "experiments-popup-first-shown";
const ACK_CLICKS_KEY = "experiments-popup-ack-clicks";

const STORAGE_KEYS = [
  UNIQUE_KEY,
  CLICKS_KEY,
  FIRST_SHOWN_KEY,
  ACK_CLICKS_KEY,
] as const;

function clearExperimentsPopupStorage() {
  for (const key of STORAGE_KEYS) {
    window.localStorage.removeItem(key);
  }
}

// Full page load / refresh starts the counters from zero.
if (typeof window !== "undefined") {
  try {
    clearExperimentsPopupStorage();
  } catch {
    // ignore
  }
}

function readUnique(): string[] {
  try {
    const raw = window.localStorage.getItem(UNIQUE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === "string");
  } catch {
    return [];
  }
}

function writeUnique(slugs: string[]) {
  window.localStorage.setItem(UNIQUE_KEY, JSON.stringify(slugs));
}

function readClicks(): number {
  try {
    const n = Number(window.localStorage.getItem(CLICKS_KEY));
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

function writeClicks(count: number) {
  window.localStorage.setItem(CLICKS_KEY, String(count));
}

function readAckClicks(): number {
  try {
    const n = Number(window.localStorage.getItem(ACK_CLICKS_KEY));
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

function writeAckClicks(count: number) {
  window.localStorage.setItem(ACK_CLICKS_KEY, String(count));
}

function hasSeenFirstPopup(): boolean {
  try {
    return window.localStorage.getItem(FIRST_SHOWN_KEY) === "1";
  } catch {
    return false;
  }
}

function markFirstPopupSeen() {
  window.localStorage.setItem(FIRST_SHOWN_KEY, "1");
}

function hasVisitedEveryProject(allSlugs: string[]): boolean {
  if (allSlugs.length === 0) return false;
  const visited = new Set(readUnique());
  return allSlugs.every((slug) => visited.has(slug));
}

/** Record a project page open. Counts every navigation once; also tracks unique slugs. */
const countedVisitKeys = new Set<string>();

export function recordProjectVisit(slug: string, visitKey: string): void {
  // React Strict Mode runs effects twice in dev — only count each navigation once.
  if (countedVisitKeys.has(visitKey)) return;
  countedVisitKeys.add(visitKey);

  const clicks = readClicks() + 1;
  writeClicks(clicks);

  const unique = readUnique();
  if (!unique.includes(slug)) {
    unique.push(slug);
    writeUnique(unique);
  }
}

export function getProjectVisitCount(): number {
  return readUnique().length;
}

/**
 * First show: after 4 unique projects.
 * Later shows: every 4 project clicks (revisits count), since last dismiss/CTA.
 */
export function shouldShowExperimentsPopup(): boolean {
  if (!hasSeenFirstPopup()) {
    return readUnique().length >= 4;
  }
  return readClicks() - readAckClicks() >= 4;
}

/**
 * Clear unique visits once every portfolio project has been opened,
 * but only when a popup isn't currently waiting to be shown.
 */
export function resetVisitsIfComplete(allSlugs: string[]) {
  if (!hasVisitedEveryProject(allSlugs)) return;
  if (shouldShowExperimentsPopup()) return;
  writeUnique([]);
}

/** Mark the current popup as seen (dismiss, CTA, or /experiments). */
export function acknowledgeExperimentsPopup(allSlugs: string[] = []) {
  if (!hasSeenFirstPopup() && readUnique().length >= 4) {
    markFirstPopupSeen();
  }
  writeAckClicks(readClicks());
  if (allSlugs.length > 0) resetVisitsIfComplete(allSlugs);
}
