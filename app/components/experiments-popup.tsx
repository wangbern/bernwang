import { useEffect, useState, type MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router";
import { DiamondArrow } from "~/components/diamond-arrow";
import {
  acknowledgeExperimentsPopup,
  resetVisitsIfComplete,
  shouldShowExperimentsPopup,
} from "~/lib/experiments-popup";
import { getProjectSlugs } from "~/lib/projects";

export function ExperimentsPopup() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const projectSlugs = getProjectSlugs();

    if (location.pathname === "/experiments") {
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
      setOpen(show);
      if (!show) resetVisitsIfComplete(projectSlugs);
    } catch {
      setOpen(false);
    }
  }, [location.pathname, location.search]);

  if (!open) return null;

  const dismiss = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
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
    setOpen(false);
    navigate("/experiments", { viewTransition: true });
  };

  return (
    <aside
      className="experiments-popup"
      role="dialog"
      aria-label="Experiments"
      aria-describedby="experiments-popup-message"
    >
      <div className="experiments-popup__accent" aria-hidden="true" />

      <div className="experiments-popup__body">
        <div className="experiments-popup__header">
          <p className="experiments-popup__eyebrow">
            <DiamondArrow
              direction="right"
              className="experiments-popup__eyebrow-arrow"
            />
            <span>experiments</span>
          </p>
          <button
            type="button"
            className="experiments-popup__close"
            aria-label="Dismiss"
            onClick={dismiss}
          >
            <svg
              className="experiments-popup__close-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M7 7l10 10M17 7L7 17"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <p className="experiments-popup__title">Curious for more?</p>
        <p
          id="experiments-popup-message"
          className="experiments-popup__message"
        >
          Extra projects and studies live in my experiments — take a look when
          you have a moment.
        </p>

        <button
          type="button"
          className="experiments-popup__cta"
          onClick={openExperiments}
        >
          <span>open experiments</span>
          <DiamondArrow
            direction="right"
            className="experiments-popup__cta-arrow"
          />
        </button>
      </div>
    </aside>
  );
}
