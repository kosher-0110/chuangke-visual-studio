"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AbstractLight from "@/components/AbstractLight";
import BrandSystemsSection from "@/components/BrandSystemsSection";
import CinematicReel from "@/components/CinematicReel";
import HeroKineticTitle from "@/components/HeroKineticTitle";
import StudioArtifact from "@/components/StudioArtifact";
import ToolMarquee from "@/components/ToolMarquee";
import TransitionLink from "@/components/TransitionLink";
import WorkCard from "@/components/WorkCard";
import { works } from "@/data/works";

const services = [
  {
    title: "品牌故事",
    label: "Brand Story",
    description: "挖掘品牌基因，构建叙事主线，为品牌找到差异化的表达方式。"
  },
  {
    title: "品牌视觉",
    label: "Brand Visual",
    description: "主视觉、LOGO、字体、色彩体系与品牌规范，建立统一的视觉识别。"
  },
  {
    title: "传播内容",
    label: "Campaign Content",
    description: "品牌影片、产品影像、海报与社交传播物料，让视觉系统落地为可传播的内容。"
  }
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-12%" },
  transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] }
};

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: contactScroll } = useScroll({
    target: contactRef,
    offset: ["start end", "end start"],
  });

  const aboutY = useTransform(aboutScroll, [0, 1], ["5%", "-5%"]);
  const contactY = useTransform(contactScroll, [0, 1], ["3%", "-3%"]);

  return (
    <main className="bg-ink text-bone">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5">
        <AbstractLight />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.2)_38%,#050505_82%)]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center"
        >
          <p className="mb-8 text-xs uppercase tracking-studio text-bone/45">福建创科文化传媒有限公司</p>
          <HeroKineticTitle />
          <p className="mt-8 text-xs uppercase tracking-studio text-bone/62 md:text-sm">
            品牌故事 · 品牌视觉 · 整合传播
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className="cinematic-button bg-bone text-ink hover:text-bone" data-cursor="button">
              查看案例
            </a>
            <a href="#contact" className="cinematic-button" data-cursor="button">
              联系我们
            </a>
          </div>
        </motion.div>
        <div className="absolute bottom-8 left-1/2 h-14 w-px -translate-x-1/2 overflow-hidden bg-white/10">
          <div className="h-1/2 w-full animate-[pulse_2.8s_ease-in-out_infinite] bg-bone/55" />
        </div>
      </section>

      <CinematicReel works={works} />

      <section id="work" className="px-5 py-24 md:py-36">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-studio text-bone/42">精选案例 / Selected Works</p>
              <h2 className="font-display text-4xl uppercase leading-none md:text-6xl">品牌视觉系统</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-bone/58">
              从品牌故事到视觉资产，为品牌构建完整的传播体系。
            </p>
          </motion.div>

          <div className="grid auto-rows-auto gap-7 md:grid-cols-2 xl:grid-cols-3">
            {works.map((work, index) => (
              <WorkCard key={work.slug} work={work} index={index} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <TransitionLink href="/work" className="cinematic-button" data-cursor="button">
              查看全部案例 / View All Works
            </TransitionLink>
          </div>
        </div>
      </section>

      <BrandSystemsSection />

      <StudioArtifact />

      <section className="border-y border-line px-5 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.82fr_1.18fr] md:items-start">
          <motion.div {...fadeUp}>
            <p className="mb-4 text-xs uppercase tracking-studio text-bone/42">服务能力 / Services</p>
            <h2 className="font-display text-4xl uppercase leading-none md:text-6xl">品牌全案服务</h2>
            <p className="mt-7 max-w-sm text-sm leading-7 text-bone/50">
              从策略梳理到视觉系统，再到可传播内容落地，为品牌建立统一且可持续的表达方式。
            </p>
          </motion.div>
          <div className="border-t border-line">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-12%" }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="grid gap-5 border-b border-line py-8 transition duration-700 ease-cinematic hover:bg-white/[0.018] md:grid-cols-[0.16fr_0.34fr_0.5fr] md:items-start md:px-4"
              >
                <p className="text-[0.64rem] uppercase tracking-studio text-bone/32">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-bone/42">{service.label}</p>
                  <h3 className="mt-3 font-display text-2xl uppercase leading-none text-bone md:text-3xl">{service.title}</h3>
                </div>
                <p className="max-w-xl text-sm leading-7 text-bone/56">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ToolMarquee />

      <section ref={aboutRef} className="px-5 py-24 md:py-32">
        <motion.div
          style={{ y: aboutY }}
          {...fadeUp}
          className="mx-auto grid max-w-7xl gap-10 border-y border-line py-14 md:grid-cols-[0.28fr_0.72fr] md:py-20"
        >
          <p className="text-xs uppercase tracking-studio text-bone/42">关于我们 / About</p>
          <div>
            <p className="max-w-4xl font-display text-3xl leading-[1.08] text-bone md:text-5xl">
              我们为品牌构建可传播的视觉系统。
            </p>
            <p className="mt-8 max-w-3xl text-base leading-8 text-bone/56 md:text-lg md:leading-9">
              福建创科文化传媒专注于品牌全案服务，从品牌策略、故事框架到视觉执行，帮助品牌在复杂媒介环境中建立统一的视觉身份。
            </p>
            <div className="mt-10 grid gap-4 border-t border-line pt-7 sm:grid-cols-3">
              {[
                ["01", "Strategy First", "策略先行"],
                ["02", "Visual Design", "视觉转化"],
                ["03", "Content Delivery", "内容落地"]
              ].map(([index, title, label]) => (
                <div key={title}>
                  <p className="text-[0.62rem] uppercase tracking-studio text-bone/32">{index}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.14em] text-bone/68">{title}</p>
                  <p className="mt-2 text-sm text-bone/42">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section ref={contactRef} id="contact" className="px-5 pb-12 md:pb-16">
        <motion.div
          style={{ y: contactY }}
          {...fadeUp}
          className="mx-auto flex min-h-[28rem] max-w-7xl flex-col justify-between border border-line bg-white/[0.025] p-6 md:p-10"
        >
          <div className="flex items-center justify-between gap-6 text-xs uppercase tracking-studio text-bone/42">
            <span>联系我们 / Contact</span>
            <span>hello@chuangke.media</span>
          </div>
          <div className="mt-20 max-w-4xl">
            <h2 className="font-display text-4xl uppercase leading-none md:text-7xl">开始你的品牌项目</h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-bone/58 md:text-lg">
              无论品牌初创还是升级重塑，我们提供从策略到视觉的全案服务。
            </p>
            <a href="mailto:hello@chuangke.media" className="cinematic-button mt-9 bg-bone text-ink hover:text-bone" data-cursor="button">
              发起合作 / Start a Project
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
