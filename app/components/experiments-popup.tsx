import { useEffect, useState, type MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router";
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
    navigate("/experiments");
  };

  return (
    <aside
      className="experiments-popup"
      role="dialog"
      aria-label="Experiments"
    >
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
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <p className="experiments-popup__title">Want more content?</p>
      <button
        type="button"
        className="experiments-popup__cta"
        onClick={openExperiments}
      >
        check out my experiments
      </button>
    </aside>
  );
}
