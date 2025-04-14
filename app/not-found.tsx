import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-light-1 px-4">
      <Image 
        src="/assets/404.png" 
        alt="404" 
        width={300} 
        height={300}
        className="mb-8"
      />
      <h2 className="text-3xl font-bold mb-4">Oops! Page not found</h2>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        The page you're looking for doesn't seem to exist or might have been moved.
      </p>
      <Link 
        href="/" 
        className="bg-primary-500 hover:bg-primary-600 transition-colors py-3 px-6 rounded-full text-white font-medium"
      >
        Return to Home
      </Link>
    </div>
  );
}
