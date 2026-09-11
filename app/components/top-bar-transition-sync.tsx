import { useContext, useLayoutEffect } from "react";
import { UNSAFE_ViewTransitionContext as ViewTransitionContext } from "react-router";
import { prepareChromeTransition } from "~/lib/top-bar-transition";

/**
 * Marks whether the outgoing/incoming routes should keep the top bar / popup
 * solid (persist) or fade them, so VT CSS can resolve at capture time.
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
      prepareChromeTransition(
        vt.currentLocation.pathname,
        vt.nextLocation.pathname,
      );
      return;
    }

    delete document.documentElement.dataset.topBar;
    delete document.documentElement.dataset.experimentsPopup;
  }, [vt]);

  return null;
}
