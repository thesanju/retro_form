"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-light-1 px-4">
      <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        We apologize for the inconvenience. Please try again later.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="bg-primary-500 hover:bg-primary-600 transition-colors py-3 px-6 rounded-full text-white font-medium"
        >
          Try again
        </button>
        <Link
          href="/"
          className="border border-primary-500 py-3 px-6 rounded-full text-primary-500 font-medium hover:bg-primary-500/10 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
