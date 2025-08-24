import Link from "next/link";

// app/not-found.js
export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-red-600">404</h1>
      <p className="text-lg mt-4">Oops! The page you are looking for doesn’t exist.</p>
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}
