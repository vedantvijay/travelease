"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, Wallet, Bus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"

const busOperators = [
  { name: "Greyhound", logo: "/buses/greyhound.png", price: 45 },
  { name: "MegaBus", logo: "/buses/megabus.png", price: 35 },
  { name: "FlixBus", logo: "/buses/flixbus.png", price: 40 },
  { name: "BoltBus", logo: "/buses/boltbus.png", price: 38 },
]

const busTimes = [
  { departure: "07:30", arrival: "11:30", duration: "4h 00m" },
  { departure: "09:00", arrival: "13:00", duration: "4h 00m" },
  { departure: "12:30", arrival: "16:30", duration: "4h 00m" },
  { departure: "15:00", arrival: "19:00", duration: "4h 00m" },
]

export default function SearchBuses() {
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
            <Bus className="h-5 w-5" />
            <span>Bus Journey Details:</span>
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
          <h2 className="text-2xl font-bold mb-6">Available Buses</h2>
          
          {busOperators.map((operator, operatorIndex) => (
            busTimes.map((time, timeIndex) => (
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
                    <Button className="mt-2">Select Bus</Button>
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
        </motion.section>
      </main>
    </motion.div>
  )
} 