"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    toast.success("Message sent successfully! We will get back to you soon.");
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Name
          </label>
          <input
            id="name"
            required
            type="text"
            placeholder="Jane Doe"
            className="rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3 text-black dark:text-white outline-none focus:border-yellow-400 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Email
          </label>
          <input
            id="email"
            required
            type="email"
            placeholder="jane@example.com"
            className="rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3 text-black dark:text-white outline-none focus:border-yellow-400 transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Subject
        </label>
        <select
          id="subject"
          required
          className="rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3 text-black dark:text-white outline-none focus:border-yellow-400 transition-colors appearance-none"
        >
          <option value="">Select a topic</option>
          <option value="custom">Custom Order Inquiry</option>
          <option value="feedback">General Feedback</option>
          <option value="partnership">Artisan Partnership</option>
          <option value="support">Order Support</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="How can we help you?"
          className="rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3 text-black dark:text-white outline-none focus:border-yellow-400 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black transition hover:bg-yellow-300 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
