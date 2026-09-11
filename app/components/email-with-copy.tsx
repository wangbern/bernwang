import { useEffect, useState } from "react";

export const CONTACT_EMAIL = "bernicewang01@gmail.com";

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const el = document.createElement("textarea");
  el.value = text;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[1em] w-[1em]"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[1em] w-[1em]"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(id);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await copyText(CONTACT_EMAIL);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      className="email-copy-button"
      onClick={copyEmail}
      aria-label={copied ? "Email copied" : "Copy email"}
      title={copied ? "Copied" : "Copy email"}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
}

type EmailWithCopyProps = {
  className?: string;
  linkClassName?: string;
};

export function EmailWithCopy({ className, linkClassName }: EmailWithCopyProps) {
  return (
    <span
      className={["inline-flex items-center gap-1.5", className]
        .filter(Boolean)
        .join(" ")}
    >
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className={
          linkClassName ?? "underline underline-offset-2 hover:opacity-70"
        }
      >
        {CONTACT_EMAIL}
      </a>
      <CopyEmailButton />
    </span>
  );
}
