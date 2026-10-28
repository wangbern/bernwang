import { useContext, useEffect, useState, type MouseEvent } from "react";
import {
  UNSAFE_ViewTransitionContext as ViewTransitionContext,
  useLocation,
  useNavigate,
} from "react-router";
import {
  acknowledgeExperimentsPopup,
  resetVisitsIfComplete,
  shouldShowExperimentsPopup,
} from "~/lib/experiments-popup";
import { DiamondArrow, DiamondX } from "~/components/diamond-arrow";
import { getProjectSlugs } from "~/lib/projects";
import { prepareChromeTransition } from "~/lib/top-bar-transition";

export function ExperimentsPopup() {
  const navigate = useNavigate();
  const location = useLocation();
  const vt = useContext(ViewTransitionContext);
  const [open, setOpen] = useState(false);
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    const projectSlugs = getProjectSlugs();

    if (location.pathname === "/experiments") {
      setEnter(false);
      setOpen(false);
      try {
        acknowledgeExperimentsPopup(projectSlugs);
      } catch {
        // ignore
      }
      return;
    }

    try {
      const show = shouldShowExperimentsPopup();
      if (!show) {
        setEnter(false);
        setOpen(false);
        resetVisitsIfComplete(projectSlugs);
        return;
      }

      // Already visible: keep the same node so persist VT cannot remount/replay.
      if (open) return;

      // First appear after the page settle — not mid-handoff.
      if (vt.isTransitioning) return;

      setEnter(true);
      setOpen(true);
    } catch {
      setEnter(false);
      setOpen(false);
    }
  }, [location.pathname, location.search, open, vt]);

  if (!open) return null;

  const dismiss = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setEnter(false);
    setOpen(false);
    try {
      acknowledgeExperimentsPopup(getProjectSlugs());
    } catch {
      // ignore
    }
  };

  const openExperiments = () => {
    try {
      acknowledgeExperimentsPopup(getProjectSlugs());
    } catch {
      // ignore
    }
    prepareChromeTransition(location.pathname, "/experiments");
    navigate("/experiments", { viewTransition: true });
  };

  return (
    <aside
      className={[
        "experiments-popup",
        enter ? "experiments-popup--enter" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      role="dialog"
      aria-label="Experiments"
      aria-describedby="experiments-popup-message"
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget) setEnter(false);
      }}
    >
      <div className="experiments-popup__body">
        <p className="experiments-popup__eyebrow">bern does more</p>
        <p
          id="experiments-popup-message"
          className="experiments-popup__message"
        >
          Strange side quests live here!
        </p>
      </div>

      {/* Two equal choices split by a diagonal: dismiss (top-right) / open (bottom-left). */}
      <div className="experiments-popup__choices">
        <button
          type="button"
          className="experiments-popup__choice experiments-popup__choice--close"
          aria-label="Dismiss"
          onClick={dismiss}
        />
        <button
          type="button"
          className="experiments-popup__choice experiments-popup__choice--open"
          aria-label="Open experiments"
          onClick={openExperiments}
        />
        {/* Icons live outside the clipped buttons so they can grow past the diagonal. */}
        <DiamondX className="experiments-popup__icon experiments-popup__icon--close" />
        <DiamondArrow
          direction="right"
          className="experiments-popup__icon experiments-popup__icon--open"
        />
      </div>
    </aside>
  );
}
