import { site } from "@/lib/site";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      {/* Header */}
      <header className="space-y-3">
        <div className="text-sm text-slate-600">{site.location}</div>
        <h1 className="text-3xl font-bold tracking-tight">{site.name}</h1>
        <p className="text-lg text-slate-800">{site.headline}</p>
        <p className="text-sm leading-6 text-slate-700">{site.summary}</p>

        <div className="flex flex-wrap gap-3 pt-3">
          <a
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white"
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm"
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm"
            href={site.links.email}
          >
            Email me
          </a>
        </div>
      </header>

      {/* Now */}
      <Section title="Now">
        <ul className="list-disc space-y-2 pl-5">
          {site.now.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <div className="flex flex-wrap gap-2">
          {site.skills.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section title="Projects">
        <div className="space-y-6">
          {site.projects.map((p) => (
            <div key={p.title} className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold text-slate-900">{p.title}</h3>
                <a
                  className="text-sm text-slate-900 underline underline-offset-4"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </div>
              <p className="mt-2 text-sm text-slate-700">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        <div className="space-y-6">
          {site.experience.map((e) => (
            <div key={e.title} className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="font-semibold text-slate-900">
                  {e.title} · {e.org}
                </div>
                <div className="text-xs text-slate-600">{e.period}</div>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Education + Certs */}
      <Section title="Education">
        <ul className="list-disc space-y-2 pl-5">
          {site.education.map((ed) => (
            <li key={ed.title}>
              <span className="font-medium text-slate-900">{ed.title}</span>{" "}
              <span className="text-slate-600">· {ed.org}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Certifications">
        <ul className="list-disc space-y-2 pl-5">
          {site.certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Section>

      {/* Footer */}
      <footer className="pt-10 text-xs text-slate-500">
        Built with Next.js. Keep it simple, update it often.
      </footer>
    </main>
  );
}
