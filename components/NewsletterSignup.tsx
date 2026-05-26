"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <FadeIn>
      <section className="mx-auto max-w-6xl rounded-3xl bg-neutral-900 px-6 py-12 text-white shadow-xl shadow-black/20">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
              Join our community
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Get exclusive offers and new artisan drops.
            </h2>
            <p className="mt-3 max-w-xl text-neutral-300">
              Be the first to know when new handcrafted collections arrive, get styling tips, and receive welcome savings.
            </p>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (!email) return;
              setSubscribed(true);
              setEmail("");
            }}
            className="flex flex-col gap-3 md:w-[420px]"
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-neutral-700 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
            />
            <button
              type="submit"
              className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
            >
              Subscribe
            </button>
            {subscribed && (
              <p className="text-sm text-emerald-300">
                Thanks for subscribing — we’ll keep your inbox bright.
              </p>
            )}
          </form>
        </div>
      </section>
    </FadeIn>
  );
}
