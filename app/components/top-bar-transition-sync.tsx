import { useContext, useLayoutEffect } from "react";
import { UNSAFE_ViewTransitionContext as ViewTransitionContext } from "react-router";
import {
  setTopBarTransitionMode,
  topBarModeForNavigation,
} from "~/lib/top-bar-transition";

/**
 * Marks whether the outgoing/incoming routes should keep the top bar solid
 * (persist) or fade it (↔ home), so VT CSS can resolve at capture time.
 */
export function TopBarTransitionSync() {
  const vt = useContext(ViewTransitionContext);

  useLayoutEffect(() => {
    if (typeof document === "undefined") return;

    if (
      vt.isTransitioning &&
      "currentLocation" in vt &&
      vt.currentLocation &&
      vt.nextLocation
    ) {
      setTopBarTransitionMode(
        topBarModeForNavigation(
          vt.currentLocation.pathname,
          vt.nextLocation.pathname,
        ),
      );
      return;
    }

    delete document.documentElement.dataset.topBar;
  }, [vt]);

  return null;
}
