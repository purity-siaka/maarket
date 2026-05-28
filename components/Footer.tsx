export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black text-black dark:text-white transition-colors">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center">
        <p className="font-semibold">MAARKET</p>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Authentic Maasai beadwork, handcrafted with culture and care.
        </p>
        <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-500">
          © {new Date().getFullYear()} MAARKET. All rights reserved.
        </p>
      </div>
    </footer>
  );
}