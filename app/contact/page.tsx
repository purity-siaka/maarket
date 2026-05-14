import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | MAARKET",
  description:
    "Contact MAARKET for custom beadwork, partnerships, or inquiries about Maasai artisan products.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl bg-black px-6 py-16 text-white">
      <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
        Contact
      </p>

      <h1 className="mt-4 text-4xl font-bold md:text-5xl">
        Get in touch with MAARKET.
      </h1>

      <p className="mt-6 max-w-2xl leading-7 text-neutral-300">
        For custom beadwork, artisan partnerships, cultural collaborations, or
        general questions, contact the MAARKET team.
      </p>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-neutral-900 p-6">
          <h2 className="text-xl font-semibold text-white">Email</h2>
          <p className="mt-3 text-neutral-300">puritynsiaka@gmail.com</p>
        </div>

        <div className="rounded-2xl bg-neutral-900 p-6">
          <h2 className="text-xl font-semibold text-white">WhatsApp</h2>
          <p className="mt-3 text-neutral-300">+254 757 807 872</p>
        </div>

        <div className="rounded-2xl bg-neutral-900 p-6">
          <h2 className="text-xl font-semibold text-white">Location</h2>
          <p className="mt-3 text-neutral-300">Kenya</p>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
        <h2 className="text-2xl font-bold text-white">Custom orders</h2>
        <p className="mt-4 max-w-3xl leading-7 text-neutral-300">
          MAARKET can support custom beadwork requests for ceremonies, fashion
          projects, cultural events, gifts, and special collections.
        </p>
      </section>

      <section className="mt-12 rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
        <h2 className="text-2xl font-bold text-white">Send Feedback & Inquiries</h2>
        <p className="mt-4 max-w-3xl leading-7 text-neutral-300">
          Have an idea for our platform, or a question about our artisans? Let us know below.
        </p>
        <ContactForm />
      </section>
    </main>
  );
}