import { createContext, useContext, useEffect, useState } from 'react';

interface TransactionProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

type TransactionContextType = {
  transactions: TransactionProps[];
}

const TransactionContext = createContext({} as TransactionContextType);

export const useTransactionContext = () => {
  return useContext(TransactionContext);
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    async function loadTransaction() {
      const response = await fetch('http://localhost:3333/transactions');
      const data = await response.json();
      setTransactions(data);
    }

    loadTransaction();

  }, []);

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}