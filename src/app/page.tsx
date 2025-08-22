export default function HomePage() {
  return (
    <main className="grid place-items-center min-h-screen p-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold">Hello, World!</h1>
        <p className="text-gray-600">This is a minimal Next.js + Tailwind app.</p>
        <a
          href="/api/hello"
          className="inline-block rounded bg-black text-white px-4 py-2 hover:bg-gray-800"
        >
          Call API
        </a>
      </div>
    </main>
  )
}
