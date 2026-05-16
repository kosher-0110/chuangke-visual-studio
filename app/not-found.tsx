import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-5 text-center text-bone">
      <div>
        <p className="mb-5 text-xs uppercase tracking-studio text-bone/42">404</p>
        <h1 className="font-display text-5xl uppercase leading-none md:text-7xl">Work Not Found</h1>
        <Link href="/#work" className="cinematic-button mt-9">
          Back to Work
        </Link>
      </div>
    </main>
  );
}
