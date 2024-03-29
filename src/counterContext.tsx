import { createContext, useContext, useState } from "react";

type CounterContextType = {
  count: number;
  setCount: (count: number) => void;
};

const CounterContext = createContext<CounterContextType | null>(null);

type CounterProviderProps = {
  children: React.ReactNode;
};

export function CounterProvider({ children }: CounterProviderProps) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
}
