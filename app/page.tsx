"use client"

import { useAuth } from "@/components/AuthContext"
import Image from "next/image"
import { Plane, Train, Bus, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TravelerTypeSelect } from "@/components/TravelerTypeSelect"
import SignIn from "./signin/page"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

const destinations = [
  {
    city: "Bali",
    image: "/images/bali.jpg",
    description: "Experience the beauty of tropical paradise"
  },
  {
    city: "Paris",
    image: "/images/paris.jpg",
    description: "Discover the city of lights and love"
  },
  {
    city: "Tokyo",
    image: "/images/tokyo.jpg",
    description: "Explore the blend of tradition and innovation"
  }
]

export default function Home() {
  const { user } = useAuth()
  const router = useRouter()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  if (!user) {
    return <SignIn />
  }

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-sky-100 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="container mx-auto px-4 py-12">
        <motion.section 
          className="text-center mb-12"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Discover Your Next Adventure</h1>
          <p className="text-xl text-gray-600">Find and book your perfect trip with ease</p>
        </motion.section>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Tabs defaultValue="flights" className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
            <TabsList className="grid grid-cols-3 gap-4 mb-6">
              <TabsTrigger value="flights" className="flex items-center justify-center">
                <Plane className="mr-2 h-4 w-4" />
                Flights
              </TabsTrigger>
              <TabsTrigger value="trains" className="flex items-center justify-center">
                <Train className="mr-2 h-4 w-4" />
                Trains
              </TabsTrigger>
              <TabsTrigger value="buses" className="flex items-center justify-center">
                <Bus className="mr-2 h-4 w-4" />
                Buses
              </TabsTrigger>
            </TabsList>

            <TabsContent value="flights">
              <form onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const searchParams = new URLSearchParams()
                searchParams.set('from', formData.get('from') as string)
                searchParams.set('to', formData.get('to') as string)
                searchParams.set('departure', formData.get('departure') as string)
                searchParams.set('return', formData.get('return') as string)
                searchParams.set('travelers', formData.get('travelers') as string)
                router.push(`/search-flights?${searchParams.toString()}`)
              }}>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  variants={itemVariants}
                >
                  <div className="col-span-1 md:col-span-3">
                    <Input name="from" placeholder="Where are you flying from?" className="w-full" required />
                  </div>
                  <div className="col-span-1 md:col-span-3">
                    <Input name="to" placeholder="Where are you flying to?" className="w-full" required />
                  </div>
                  <div>
                    <Input name="departure" type="date" placeholder="Departure" className="w-full" required />
                  </div>
                  <div>
                    <Input name="return" type="date" placeholder="Return" className="w-full" required />
                  </div>
                  <div>
                    <TravelerTypeSelect name="travelers" />
                  </div>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Button type="submit" className="w-full mt-6">Search Flights</Button>
                </motion.div>
              </form>
            </TabsContent>

            <TabsContent value="trains">
              <form onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const searchParams = new URLSearchParams()
                searchParams.set('from', formData.get('from') as string)
                searchParams.set('to', formData.get('to') as string)
                searchParams.set('departure', formData.get('departure') as string)
                searchParams.set('return', formData.get('return') as string)
                searchParams.set('travelers', formData.get('travelers') as string)
                router.push(`/search-trains?${searchParams.toString()}`)
              }}>
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4" variants={itemVariants}>
                  <div className="col-span-1 md:col-span-3">
                    <Input name="from" placeholder="Departure station" className="w-full" required />
                  </div>
                  <div className="col-span-1 md:col-span-3">
                    <Input name="to" placeholder="Arrival station" className="w-full" required />
                  </div>
                  <div>
                    <Input name="departure" type="date" placeholder="Departure" className="w-full" required />
                  </div>
                  <div>
                    <Input name="return" type="date" placeholder="Return" className="w-full" required />
                  </div>
                  <div>
                    <TravelerTypeSelect name="travelers" />
                  </div>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Button type="submit" className="w-full mt-6">Search Trains</Button>
                </motion.div>
              </form>
            </TabsContent>

            <TabsContent value="buses">
              <form onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const searchParams = new URLSearchParams()
                searchParams.set('from', formData.get('from') as string)
                searchParams.set('to', formData.get('to') as string)
                searchParams.set('departure', formData.get('departure') as string)
                searchParams.set('return', formData.get('return') as string)
                searchParams.set('travelers', formData.get('travelers') as string)
                router.push(`/search-buses?${searchParams.toString()}`)
              }}>
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4" variants={itemVariants}>
                  <div className="col-span-1 md:col-span-3">
                    <Input name="from" placeholder="Departure city" className="w-full" required />
                  </div>
                  <div className="col-span-1 md:col-span-3">
                    <Input name="to" placeholder="Destination city" className="w-full" required />
                  </div>
                  <div>
                    <Input name="departure" type="date" placeholder="Departure" className="w-full" required />
                  </div>
                  <div>
                    <Input name="return" type="date" placeholder="Return" className="w-full" required />
                  </div>
                  <div>
                    <TravelerTypeSelect name="travelers" />
                  </div>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Button type="submit" className="w-full mt-6">Search Buses</Button>
                </motion.div>
              </form>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.section 
          className="mt-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div 
                key={destination.city} 
                className="bg-white rounded-xl shadow-md overflow-hidden"
                variants={itemVariants}
              >
                <div className="relative h-48">
                  <Image 
                    src={destination.image}
                    alt={`Image of ${destination.city}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{destination.city}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <Button variant="outline" className="w-full">
                    Explore
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mt-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["Summer Sale", "Last Minute Deals"].map((offer) => (
              <motion.div
                key={offer}
                variants={itemVariants}
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
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </motion.div>
  )
}

