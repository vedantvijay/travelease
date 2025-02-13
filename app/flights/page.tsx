"use client"

import { useAuth } from "@/components/AuthContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TravelerTypeSelect } from "@/components/TravelerTypeSelect"
import SignIn from "../signin/page"
import { ArrowRight, Clock, Wallet } from "lucide-react"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"

interface FlightSearchParams {
  from: string
  to: string
  departure: string
  return: string
  travelers: string
  discount: number
}

export default function FlightsPage() {
  const { user } = useAuth()
  const searchParams = useSearchParams()
  const [showResults, setShowResults] = useState(false)
  const [searchData, setSearchData] = useState<FlightSearchParams>({
    from: searchParams.get('from') || '',
    to: searchParams.get('to') || '',
    departure: searchParams.get('departure') || '',
    return: searchParams.get('return') || '',
    travelers: searchParams.get('travelers') || '',
    discount: 0
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResults(true)
  }

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
        {/* Search Section */}
        <motion.section 
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-6">Search Flights</h2>
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1 md:col-span-3">
                <Input 
                  placeholder="Where are you flying from?" 
                  className="w-full"
                  value={searchData.from}
                  onChange={(e) => setSearchData(prev => ({ ...prev, from: e.target.value }))}
                  required
                />
              </div>
              <div className="col-span-1 md:col-span-3">
                <Input 
                  placeholder="Where are you flying to?" 
                  className="w-full"
                  value={searchData.to}
                  onChange={(e) => setSearchData(prev => ({ ...prev, to: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Input 
                  type="date" 
                  placeholder="Departure" 
                  className="w-full"
                  value={searchData.departure}
                  onChange={(e) => setSearchData(prev => ({ ...prev, departure: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Input 
                  type="date" 
                  placeholder="Return" 
                  className="w-full"
                  value={searchData.return}
                  onChange={(e) => setSearchData(prev => ({ ...prev, return: e.target.value }))}
                  required
                />
              </div>
              <div>
                <TravelerTypeSelect 
                  value={searchData.travelers}
                  onChange={(value, discount) => setSearchData(prev => ({ 
                    ...prev, 
                    travelers: value,
                    discount: discount 
                  }))}
                />
              </div>
            </div>
            <Button type="submit" className="w-full mt-6">Search Flights</Button>
          </form>
        </motion.section>

        {/* Flight Results Section */}
        {showResults && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.section className="space-y-4" variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-6">Available Flights</h2>
              <div className="text-gray-600 mb-6">
                Showing flights from {searchData.from} to {searchData.to}
              </div>
              
              {/* Sample Flight Cards */}
              {[1, 2, 3].map((flight) => (
                <motion.div 
                  key={flight}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <div className="text-lg font-semibold">09:00</div>
                        <ArrowRight className="text-gray-400" />
                        <div className="text-lg font-semibold">11:30</div>
                      </div>
                      <div className="text-gray-500 mt-2">Direct • 2h 30m</div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">Duration: 2h 30m</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Wallet className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">From $299</span>
                      </div>
                    </div>

                    <div className="flex-1 text-right">
                      <div className="text-2xl font-bold text-teal-600">
                        ${searchData.discount ? (
                          <>
                            <span className="line-through text-gray-400 text-lg mr-2">$299</span>
                            {Math.round(299 * (1 - searchData.discount / 100))}
                          </>
                        ) : (
                          299
                        )}
                      </div>
                      {searchData.discount > 0 && (
                        <div className="text-sm text-teal-600 mb-2">
                          {searchData.discount}% discount applied
                        </div>
                      )}
                      <Button className="mt-2">Select Flight</Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.section>

            {/* Additional Information */}
            <motion.section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8" variants={itemVariants}>
              <motion.div className="bg-white rounded-xl shadow-md p-6" variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4">Flexible Booking</h3>
                <p className="text-gray-600">Change your flight with no fee up to 24 hours before departure</p>
              </motion.div>
              <motion.div className="bg-white rounded-xl shadow-md p-6" variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4">Best Price Guarantee</h3>
                <p className="text-gray-600">Find a lower price and we'll match it</p>
              </motion.div>
              <motion.div className="bg-white rounded-xl shadow-md p-6" variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
                <p className="text-gray-600">Get assistance anytime, anywhere</p>
              </motion.div>
            </motion.section>
          </motion.div>
        )}
      </main>
    </motion.div>
  )
} 