import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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

function App() {
  return (
    <>
      <Header />
      <p>
        The Header and CountButton components re-render when the count changes,
        but the app doesn't. 👍
      </p>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <CountButton />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
