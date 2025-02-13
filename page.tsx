import Image from "next/image"
import { Plane, Hotel, MapPin, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TravelerTypeSelect } from "@/components/TravelerTypeSelect"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-teal-600">TravelEase</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-teal-600">
            Flights
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-600">
            Hotels
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-600">
            Activities
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-600">
            Deals
          </a>
        </nav>
        <Button variant="outline" className="hidden md:inline-flex">
          Sign In
        </Button>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Discover Your Next Adventure</h1>
          <p className="text-xl text-gray-600">Find and book your perfect trip with ease</p>
        </section>

        <Tabs defaultValue="flights" className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <TabsList className="grid grid-cols-3 gap-4 mb-6">
            <TabsTrigger value="flights" className="flex items-center justify-center">
              <Plane className="mr-2 h-4 w-4" />
              Flights
            </TabsTrigger>
            <TabsTrigger value="hotels" className="flex items-center justify-center">
              <Hotel className="mr-2 h-4 w-4" />
              Hotels
            </TabsTrigger>
            <TabsTrigger value="activities" className="flex items-center justify-center">
              <MapPin className="mr-2 h-4 w-4" />
              Activities
            </TabsTrigger>
          </TabsList>
          <TabsContent value="flights">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1 md:col-span-3">
                <Input placeholder="Where are you flying from?" className="w-full" />
              </div>
              <div className="col-span-1 md:col-span-3">
                <Input placeholder="Where are you flying to?" className="w-full" />
              </div>
              <div>
                <Input type="date" placeholder="Departure" className="w-full" />
              </div>
              <div>
                <Input type="date" placeholder="Return" className="w-full" />
              </div>
              <div>
                <Input placeholder="Travelers" className="w-full" />
              </div>
              <div className="col-span-1 md:col-span-3">
                <TravelerTypeSelect />
              </div>
            </div>
            <Button className="w-full mt-6">Search Flights</Button>
          </TabsContent>
          <TabsContent value="hotels">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1 md:col-span-3">
                <Input placeholder="Where are you going?" className="w-full" />
              </div>
              <div>
                <Input type="date" placeholder="Check-in" className="w-full" />
              </div>
              <div>
                <Input type="date" placeholder="Check-out" className="w-full" />
              </div>
              <div>
                <Input placeholder="Guests" className="w-full" />
              </div>
              <div className="col-span-1 md:col-span-3">
                <TravelerTypeSelect />
              </div>
            </div>
            <Button className="w-full mt-6">Search Hotels</Button>
          </TabsContent>
          <TabsContent value="activities">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1 md:col-span-2">
                <Input placeholder="Where do you want to go?" className="w-full" />
              </div>
              <div>
                <Input type="date" placeholder="Date" className="w-full" />
              </div>
              <div>
                <Input placeholder="Number of people" className="w-full" />
              </div>
              <div className="col-span-1 md:col-span-2">
                <TravelerTypeSelect />
              </div>
            </div>
            <Button className="w-full mt-6">Search Activities</Button>
          </TabsContent>
        </Tabs>

        <section className="mt-24">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Bali", "Paris", "Tokyo"].map((city) => (
              <div key={city} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src={`/images/${city.toLowerCase()}.jpg`}
                    alt={`Image of ${city}`}
                    layout="fill" 
                    objectFit="cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{city}</h3>
                  <p className="text-gray-600 mb-4">Experience the beauty of {city}</p>
                  <Button variant="outline" className="w-full">
                    Explore
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["Summer Sale", "Last Minute Deals"].map((offer) => (
              <div
                key={offer}
                className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl shadow-md overflow-hidden text-white"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{offer}</h3>
                  <p className="mb-4">Save up to 30% on select bookings</p>
                  <Button variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100">
                    View Deals
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-teal-600">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-teal-600">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-teal-600">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-teal-600">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-teal-600">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-teal-600">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-teal-600">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-teal-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-teal-600">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-teal-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-teal-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-teal-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">&copy; 2025 TravelEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

