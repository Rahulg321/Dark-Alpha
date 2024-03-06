import Link from "next/link";

export default function NotFound() {
  return (
    <div className="global">
      <div className="flex min-h-[100vh] flex-col items-center justify-center">
        <h1 className="mb-2">Not Found</h1>
        <p>Could not find requested resource</p>
        <Link
          className="mt-4 inline-block border-2 px-6 py-2 font-semibold text-[#7a9e9f] transition hover:bg-[#7a9e9f] hover:text-white"
          href="/home"
        >
          Return To Home
        </Link>
      </div>
    </div>
  );
}
