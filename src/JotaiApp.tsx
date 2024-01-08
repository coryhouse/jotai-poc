import "./App.css";
import { atom, useAtom } from "jotai";

const counterAtom = atom(0);

function Header() {
  const [count] = useAtom(counterAtom);
  return <div>{count}</div>;
}

function CountButton() {
  const [count, setCount] = useAtom(counterAtom);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
}

export default function JotaiApp() {
  return (
    <>
      <h1>This app uses Jotai.</h1>
      <p>
        The Header and CountButton components re-render when the count changes,
        but the app doesn't. 👍
      </p>
      <Header />
      <div className="card">
        <CountButton />
        <p>
          Edit <code>src/JotaiApp.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}
