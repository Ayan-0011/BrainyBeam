import Link from "next/link"

const page = () => {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About Us
        </h1>

        <p className="text-gray-600 mb-8">
          Learn more about our application and what we are building.
        </p>

        <div className="bg-white p-8 rounded-2xl shadow-sm border">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-7">
            We want to build simple, powerful and user-friendly
            applications using modern technologies like Next.js,
            React and Tailwind CSS.
          </p>

          <Link href="/about/blog" className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Read Our Blog
          </Link>
        </div>
      </div>
    </main>
  )
}

export default page