import { notFound } from "next/navigation";
import { getWorkBySlug, works } from "@/data/works";
import WorkContent from "./WorkContent";

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
      title: "案例未找到 | 创科视觉"
    };
  }

  return {
    title: `${work.title} | 创科视觉`,
    description: work.concept
  };
}

export default function WorkPage({ params }: WorkPageProps) {
  const work = getWorkBySlug(params.slug);

  if (!work) {
    notFound();
  }

  return <WorkContent work={work} />;
}
