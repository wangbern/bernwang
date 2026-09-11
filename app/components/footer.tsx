import { EmailWithCopy } from "~/components/email-with-copy";

export function Footer() {
  return (
    <footer className="mt-auto px-8 pb-4 pt-10 text-center text-sm text-ink/70">
      <p>
        <EmailWithCopy />
      </p>
      <p className="mt-2">© 2026 Bernice Wang. All rights reserved.</p>
    </footer>
  );
}
