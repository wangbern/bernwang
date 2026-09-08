import aboutMeImage from "~/assets/profile.jpg";
import itchIoIcon from "~/assets/itch-io-icon.png";
import linkedInIcon from "~/assets/linkedin-app-icon.png";
import { Footer } from "~/components/footer";
import { TopBar } from "~/components/top-bar";
import type { Route } from "./+types/about-me";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About Me — Bernice Wang" }];
}

export default function AboutMe() {
  return (
    <main className="fixed inset-0 overflow-auto bg-transparent">
      <div className="flex min-h-full flex-col">
        <TopBar showTitle={false} />
        <div className="flex flex-1 flex-col py-10 md:flex-row">
          <div className="flex w-full items-center justify-center px-8 md:w-1/2">
            <img
              src={aboutMeImage}
              alt=""
              className="w-full max-w-md object-contain"
            />
          </div>
          <div className="mt-10 flex w-full items-center justify-start px-8 md:-ml-24 md:mt-0 md:w-1/2 md:px-0">
            <div className="min-w-0 max-w-xl text-left">
              <h1 className="text-4xl font-semibold text-heading md:text-5xl">Bernice Wang</h1>
              <p className="mt-2 text-base text-ink/70">
                Designer focused on tactile process and digital craft.
              </p>
              <div className="mt-8 space-y-4 text-base leading-relaxed text-ink">
                <p>
                  Bernice is a designer focused on tactile process and digital
                  craft. Bernice is a designer focused on tactile process and
                  digital craft. Bernice is a designer focused on tactile
                  process and digital craft.
                </p>
              </div>
              <div className="mt-8 space-y-3 text-base leading-relaxed text-ink">
                <p>
                  <a
                    href="mailto:bernicewang01@gmail.com"
                    className="underline underline-offset-2 hover:opacity-70"
                  >
                    bernicewang01@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="/resume.pdf"
                    className="underline underline-offset-2 hover:opacity-70"
                  >
                    resume
                  </a>
                </p>
                <br />
                <p className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/bernwang/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block hover:opacity-70"
                  >
                    <img
                      src={linkedInIcon}
                      alt="LinkedIn"
                      className="h-8 w-8 object-contain"
                    />
                  </a>
                  <a
                    href="https://bernwang.itch.io"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block hover:opacity-70"
                  >
                    <img
                      src={itchIoIcon}
                      alt="itch.io"
                      className="h-8 w-8 object-contain"
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
