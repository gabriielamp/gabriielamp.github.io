import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Lightbulb,
  Target,
} from "lucide-react";
import logoFull from "../assets/images/icons/Logo-Vec.svg";

const detailSections = [
  { key: "need", label: "La necesidad", icon: Target },
  { key: "challenge", label: "El desafío", icon: Lightbulb },
  { key: "solution", label: "La solución", icon: CheckCircle2 },
  { key: "development", label: "Desarrollo", icon: Code2 },
];

function InternalLink({ href, onNavigate, children, className }) {
  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        if (
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }

        event.preventDefault();
        onNavigate(href);
      }}
    >
      {children}
    </a>
  );
}

export default function ProjectDetail({ project, caseStudy, onNavigate }) {
  if (!project || !caseStudy) {
    return (
      <main className="grid min-h-screen place-items-center bg-brand-soft px-6 font-poppins">
        <div className="max-w-lg text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
            Proyecto no encontrado
          </p>
          <h1 className="mt-3 text-4xl font-bold text-brand-navy">
            Este caso de estudio no está disponible.
          </h1>
          <InternalLink
            href="/"
            onNavigate={onNavigate}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blueDark hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver al portfolio
          </InternalLink>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-white font-poppins text-brand-navy">
      <header className="sticky top-0 z-40 border-b border-brand-line bg-white/90 px-5 py-3 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6">
          <InternalLink href="/" onNavigate={onNavigate} className="shrink-0">
            <img src={logoFull} alt="Gabriela Morón Pereira" className="h-10 w-auto" />
          </InternalLink>
          <InternalLink
            href="/proyectos"
            onNavigate={onNavigate}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-colors hover:text-brand-blue"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver a proyectos
          </InternalLink>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft to-white px-5 pb-14 pt-14 sm:px-8 lg:pb-20 lg:pt-20">
          <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-blue/15 blur-3xl" />
          <div className="relative mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
                {caseStudy.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] text-brand-navy sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-brand-muted sm:text-lg">
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand-blue/20 bg-white px-3 py-1.5 text-xs font-semibold text-brand-blue"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(34,98,234,0.24)] transition hover:-translate-y-0.5 hover:bg-brand-blueDark hover:text-white"
                >
                  Visitar sitio web
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>

            <div className="relative rounded-[32px] border border-brand-line bg-white p-5 shadow-brand sm:p-8">
              <div
                className="absolute inset-x-12 top-10 h-28 rounded-full opacity-30 blur-3xl"
                style={{ backgroundColor: caseStudy.accent }}
                aria-hidden="true"
              />
              <img
                src={project.imageDesktop ?? project.image}
                alt={project.alt}
                className="relative mx-auto w-full object-contain drop-shadow-[0_24px_30px_rgba(7,22,63,0.16)]"
              />
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-5 md:grid-cols-2">
              {detailSections.map(({ key, label, icon: Icon }) => (
                <article
                  key={key}
                  className="rounded-brand border border-brand-line bg-white p-6 shadow-brand sm:p-8"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand-blue">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-xl font-bold">{label}</h2>
                  <p className="mt-3 text-sm leading-7 text-brand-muted sm:text-base">
                    {caseStudy[key]}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 grid overflow-hidden rounded-brand bg-brand-blue text-white lg:grid-cols-[0.8fr_1.2fr]">
              <div className="p-7 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                  Funcionalidades
                </p>
                <ul className="mt-6 space-y-3">
                  {caseStudy.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm sm:text-base">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-white/80" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-blueDark p-7 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                  Resultado
                </p>
                <p className="mt-5 text-xl font-semibold leading-relaxed sm:text-2xl">
                  {caseStudy.result}
                </p>
                <p className="mt-6 border-t border-white/20 pt-6 text-sm leading-7 text-white/75">
                  {caseStudy.galleryNote}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-navy px-5 py-8 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Gabriela Morón · Diseño y desarrollo web
      </footer>
    </div>
  );
}
