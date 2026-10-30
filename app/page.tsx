import { education, experience, identity, links, stack } from "@/lib/content";

function Section({
  title,
  children,
  delayClass = "",
}: {
  title: string;
  children: React.ReactNode;
  delayClass?: string;
}) {
  return (
    <section
      className={`grid gap-4 border-t border-line pt-7 sm:grid-cols-[8rem_1fr] ${delayClass}`}
      aria-labelledby={`section-${title.toLowerCase()}`}
    >
      <h2
        id={`section-${title.toLowerCase()}`}
        className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted"
      >
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main
      id="main"
      className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-11 px-6 py-16 sm:py-20"
    >
      <header className="flex flex-col gap-3 rise">
        <h1 className="text-[2.35rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl">
          {identity.name}
        </h1>
        <p className="text-[1.05rem] leading-relaxed text-muted">
          {identity.title} at {identity.org} · {identity.location}
        </p>
        <nav
          className="flex flex-wrap gap-x-5 gap-y-2 pt-1 font-mono text-sm"
          aria-label="Primary"
        >
          {links.map((l) => {
            const external = l.href.startsWith("http");
            return (
              <a
                key={l.label}
                href={l.href}
                className="nav-link"
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {l.label}
              </a>
            );
          })}
        </nav>
      </header>

      <Section title="Work" delayClass="rise rise-delay-1">
        {experience.map((job) => (
          <article key={job.company} className="flex flex-col gap-3">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-[1.05rem] font-medium tracking-tight">
                {job.role}, {job.company}
              </h3>
              <time className="font-mono text-xs text-muted" dateTime="2025-09">
                {job.period}
              </time>
            </div>
            <p className="text-sm text-muted">{job.programme}</p>
            <p className="leading-7 text-[0.98rem]">{job.summary}</p>
            <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 marker:text-accent">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </Section>

      <Section title="Education" delayClass="rise rise-delay-2">
        {education.map((ed) => (
          <div
            key={ed.institution}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
          >
            <div>
              <h3 className="font-medium tracking-tight">{ed.degree}</h3>
              <p className="text-sm text-muted">{ed.institution}</p>
            </div>
            <time className="font-mono text-xs text-muted" dateTime="2021/2025">
              {ed.period}
            </time>
          </div>
        ))}
      </Section>

      <Section title="Stack" delayClass="rise rise-delay-3">
        <dl className="grid grid-cols-[6.5rem_1fr] gap-y-2.5 text-sm">
          {stack.map((s) => (
            <div key={s.group} className="contents">
              <dt className="text-muted">{s.group}</dt>
              <dd className="tracking-tight">{s.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <footer className="mt-auto border-t border-line pt-6 font-mono text-xs text-muted">
        © 2026 {identity.name}
      </footer>
    </main>
  );
}
