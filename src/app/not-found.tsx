import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 pt-32 text-center">
      <p className="font-display text-8xl font-extrabold text-lime">ọ̀?</p>
      <h1 className="mt-6 font-display text-4xl font-bold">This page doesn’t exist.</h1>
      <p className="mt-3 text-lg text-ink-soft">The link may be old — our site has a new home.</p>
      <Link href="/" className="focus-ring mt-8 rounded-full bg-ink px-6 py-3.5 font-semibold text-paper">
        Back to Nailangs
      </Link>
    </section>
  );
}
