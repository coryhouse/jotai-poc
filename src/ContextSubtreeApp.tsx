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

export default function ContextSubtreeApp() {
  return (
    <>
      <h1>Context on a subtree</h1>
      <p>Only the subtree below re-renders when the count changes 👍</p>
      <CounterProvider>
        <>
          <Header />
          <div className="card">
            <CountButton />
            <p>
              Edit <code>src/ContextApp.tsx</code> and save to test HMR
            </p>
          </div>
        </>
      </CounterProvider>
    </>
  );
}
