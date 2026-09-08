
const page = () => {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">

        <p className="text-blue-600 font-semibold mb-3">
          Welcome to MyApp
        </p>

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Build Something
          <span className="text-blue-600"> Amazing</span>
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          A modern Next.js application with clean UI and
          responsive design.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>

          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>

      </div>
    </main>
  )
}

export default page

