"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, Wallet, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"

const airlines = [
  { name: "Emirates", logo: "/airlines/emirates.png", price: 299 },
  { name: "Qatar Airways", logo: "/airlines/qatar.png", price: 315 },
  { name: "Singapore Airlines", logo: "/airlines/singapore.png", price: 285 },
  { name: "Lufthansa", logo: "/airlines/lufthansa.png", price: 275 },
]

const flightTimes = [
  { departure: "09:00", arrival: "11:30", duration: "2h 30m" },
  { departure: "13:00", arrival: "15:30", duration: "2h 30m" },
  { departure: "16:00", arrival: "18:30", duration: "2h 30m" },
  { departure: "20:00", arrival: "22:30", duration: "2h 30m" },
]

export default function SearchFlights() {
  const searchParams = useSearchParams()
  const from = searchParams.get('from')
  const to = searchParams.get('to')
  const departure = searchParams.get('departure')
  const travelers = searchParams.get('travelers')

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

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-sky-100 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="container mx-auto px-4 py-12">
        <motion.section 
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <Plane className="h-5 w-5" />
            <span>Flight Details:</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-800">
            <div>
              <div className="text-sm text-gray-500">From</div>
              <div className="font-semibold">{from}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">To</div>
              <div className="font-semibold">{to}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Date</div>
              <div className="font-semibold">{departure}</div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-6">Available Flights</h2>
          
          {airlines.map((airline, airlineIndex) => (
            flightTimes.map((time, timeIndex) => (
              <motion.div 
                key={`${airlineIndex}-${timeIndex}`}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800 mb-2">{airline.name}</div>
                    <div className="flex items-center gap-4">
                      <div className="text-lg font-semibold">{time.departure}</div>
                      <ArrowRight className="text-gray-400" />
                      <div className="text-lg font-semibold">{time.arrival}</div>
                    </div>
                    <div className="text-gray-500 mt-2">Direct • {time.duration}</div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">Duration: {time.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Wallet className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">From ${airline.price}</span>
                    </div>
                  </div>

                  <div className="flex-1 text-right">
                    <div className="text-2xl font-bold text-teal-600">${airline.price}</div>
                    <Button className="mt-2">Select Flight</Button>
                  </div>
                </div>
              </motion.div>
            ))
          ))}
        </motion.section>

        <motion.section 
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="bg-white rounded-xl shadow-md p-6" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">Price Match Promise</h3>
            <p className="text-gray-600">Find a lower price and we'll match it</p>
          </motion.div>
          <motion.div className="bg-white rounded-xl shadow-md p-6" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">Flexible Booking</h3>
            <p className="text-gray-600">Change your flight with no fee up to 24 hours before departure</p>
          </motion.div>
          <motion.div className="bg-white rounded-xl shadow-md p-6" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
            <p className="text-gray-600">Get assistance anytime, anywhere</p>
          </motion.div>
        </motion.section>
      </main>
    </motion.div>
  )
} 