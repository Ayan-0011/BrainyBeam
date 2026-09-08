import Button from "@/components/Button"

const page = () => {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-gray-50 px-6 py-12">

      <div className="max-w-xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900 text-center">
          Contact Us
        </h1>

        <p className="text-gray-500 text-center mt-3 mb-8">
          Have a question? Send us a message.
        </p>

        <div className="ms-60">
          <Button />
        </div>

      </div>

    </main>
  )
}

export default page