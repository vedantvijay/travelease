"use client"

import { createContext, useContext, useState } from "react"

interface User {
  name: string
  email: string
}

export interface AuthContextType {
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, name: string) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: async () => {},
  signUp: async () => {},
  signOut: () => {}
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const signIn = async (email: string, password: string) => {
    // Simulate API call
    setUser({ name: "John Doe", email })
  }

  const signUp = async (email: string, password: string, name: string) => {
    // Simulate API call
    setUser({ name, email })
  }

  const signOut = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

