
const page = () => {


  return (
    <main className="min-h-[calc(100vh-80px)] bg-gray-50">

      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">

          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Our Blog
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Learn. Build. <span className="text-blue-600">Grow.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Explore tutorials, development tips, and useful resources
            for modern web developers.
          </p>

        </div>
      </section>

    </main>
  );
};

export default page;

