import { memo } from "react";
import "./App.css";
import { CounterProvider, useCounter } from "./counterContext";

function Header() {
  const { count } = useCounter();
  return <h2>{count}</h2>;
}

function CountButton() {
  const { count, setCount } = useCounter();
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
}

type CardProps = {
  children: React.ReactNode;
};

const Card = memo(({ children }: CardProps) => {
  return (
    <div className="card">
      {children}
      <p>
        Edit <code>src/ContextApp.tsx</code> and save to test HMR
      </p>
    </div>
  );
});

export default function ContextOptimizedSubtreeApp() {
  return (
    <>
      <h1>Context on an optimized subtree</h1>
      <p>Only the subtree re-renders when the count changes 👍</p>
      <CounterProvider>
        <>
          <Header />
          <Card>
            <CountButton />
          </Card>
        </>
      </CounterProvider>
    </>
  );
}
