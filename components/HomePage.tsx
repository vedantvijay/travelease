import { Tabs } from "@/components/ui/tabs"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Discover Your Next Adventure</h1>
          <p className="text-xl text-gray-600">Find and book your perfect trip with ease</p>
        </section>

        <Tabs defaultValue="flights" className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
          {/* ... (rest of the Tabs component remains the same) ... */}
        </Tabs>

        <section className="mt-24">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Destinations</h2>
          {/* ... (Featured Destinations section remains the same) ... */}
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Special Offers</h2>
          {/* ... (Special Offers section remains the same) ... */}
        </section>
      </main>

      <footer className="bg-gray-100 mt-24">{/* ... (Footer content remains the same) ... */}</footer>
    </div>
  )
}

