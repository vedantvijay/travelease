"use client"

import { useAuth } from "@/components/AuthContext"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  const { user, signOut } = useAuth()

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-teal-600">TravelEase</div>
        <nav className="flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-teal-600">Home</Link>
          <Link href="/flights" className="text-gray-600 hover:text-teal-600">Flights</Link>
          <Link href="/trains" className="text-gray-600 hover:text-teal-600">Trains</Link>
          <Link href="/buses" className="text-gray-600 hover:text-teal-600">Buses</Link>
          <Link href="/deals" className="text-gray-600 hover:text-teal-600">Deals</Link>
        </nav>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-gray-600">Welcome, {user.name}</span>
              <Button variant="outline" onClick={signOut}>Sign Out</Button>
            </>
          ) : (
            <Button variant="outline">Sign In</Button>
          )}
        </div>
      </div>
    </header>
  )
}

