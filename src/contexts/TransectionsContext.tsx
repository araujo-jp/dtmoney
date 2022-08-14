import { createContext, ReactNode, useEffect, useState } from 'react';

interface Transaction {
  id: number
  description: string
  type: string
  category: string
  price: number
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
}

export const TransactionContext = createContext({} as TransactionContextType)

interface TransectionProviderProps {
  children: ReactNode
}

export function TransactionProvider({ children }: TransectionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions() {
    const response = await fetch(`http://localhost:3333/transactions`)
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}