import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkBySlug, getYoutubeEmbed, works } from "@/data/works";

type WorkPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return works.map((work) => ({
    slug: work.slug
  }));
}

export function generateMetadata({ params }: WorkPageProps) {
  const work = getWorkBySlug(params.slug);

  if (!work) {
    return {
      title: "Work Not Found | ZOOR Visual Studio"
    };
  }

  return {
    title: `${work.title} | ZOOR Visual Studio`,
    description: work.concept
  };
}

export default function WorkPage({ params }: WorkPageProps) {
  const work = getWorkBySlug(params.slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-ink px-5 py-6 text-bone md:py-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between text-xs uppercase tracking-studio text-bone/45">
        <Link href="/#work" className="transition duration-500 hover:text-bone">
          Back to Work
        </Link>
        <span>ZOOR Visual Studio</span>
      </nav>

      <section className="mx-auto max-w-7xl pt-16 md:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-studio text-bone/42">{work.type}</p>
            <h1 className="font-display text-[clamp(3.2rem,9vw,9rem)] uppercase leading-[0.84]">{work.title}</h1>
          </div>
          <p className="max-w-xl text-base leading-8 text-bone/62 md:text-lg">{work.concept}</p>
        </div>

        <div className="media-fallback mt-12 aspect-video overflow-hidden border border-line bg-graphite">
          <iframe
            className="h-full w-full"
            src={`${getYoutubeEmbed(work.youtubeId)}?rel=0&modestbranding=1`}
            title={work.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 border-b border-line py-16 md:grid-cols-3 md:py-24">
        <div>
          <p className="mb-4 text-xs uppercase tracking-studio text-bone/38">Role</p>
          <p className="text-lg leading-8 text-bone/72">{work.role}</p>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-studio text-bone/38">Tools</p>
          <div className="flex flex-wrap gap-2">
            {work.tools.map((tool) => (
              <span key={tool} className="border border-line px-3 py-2 text-xs uppercase tracking-[0.08em] text-bone/64">
                {tool}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-studio text-bone/38">Year</p>
          <p className="text-lg text-bone/72">{work.year}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-16 text-center md:py-24">
        <Link href="/#work" className="cinematic-button">
          Return to Work
        </Link>
      </section>
    </main>
  );
}
