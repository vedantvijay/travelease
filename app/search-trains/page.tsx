"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, Wallet, Train } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"

const trainOperators = [
  { name: "EuroRail Express", logo: "/trains/eurorail.png", price: 89 },
  { name: "National Rail", logo: "/trains/national.png", price: 75 },
  { name: "Speed Transit", logo: "/trains/speed.png", price: 95 },
  { name: "Regional Connect", logo: "/trains/regional.png", price: 65 },
]

const trainTimes = [
  { departure: "08:00", arrival: "10:15", duration: "2h 15m" },
  { departure: "10:30", arrival: "12:45", duration: "2h 15m" },
  { departure: "14:00", arrival: "16:15", duration: "2h 15m" },
  { departure: "17:30", arrival: "19:45", duration: "2h 15m" },
]

export default function SearchTrains() {
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
            <Train className="h-5 w-5" />
            <span>Train Journey Details:</span>
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
          <h2 className="text-2xl font-bold mb-6">Available Trains</h2>
          
          {trainOperators.map((operator, operatorIndex) => (
            trainTimes.map((time, timeIndex) => (
              <motion.div 
                key={`${operatorIndex}-${timeIndex}`}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800 mb-2">{operator.name}</div>
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
                      <span className="text-gray-600">From ${operator.price}</span>
                    </div>
                  </div>

                  <div className="flex-1 text-right">
                    <div className="text-2xl font-bold text-teal-600">${operator.price}</div>
                    <Button className="mt-2">Select Train</Button>
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
            <p className="text-gray-600">Change your train with no fee up to 24 hours before departure</p>
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