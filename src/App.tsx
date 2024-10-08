import { useState } from "react";
import rows from "./data/tables.json";
import { roll } from "./lib";

const re = /(.*?): (.*)/;

function Title({ children } : Children) {
  return <h1 className="text-3xl font-bold bg-black text-white inline">{children}</h1>
}

function Result({ result }: { result: RollResult }) {
  const match = re.exec(result.text)!;
  const title = match[1];
  const body = match[2];

  return (
    <div>
      <div className="font-bold">{result.value} - {title}</div>
      <div>{body}</div>
    </div>
  );
}

function Roller() {
  const [res, setRest] = useState<RollResult | null>();

  return (
    <div className="m-4 flex flex-col gap-4">
      <div className="self-start">
      <Title>Salvage Union Roller</Title>
      <div>Salvage Union is published by Leyline Press - <a href="https://leyline.press/">https://leyline.press/</a></div>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col">
          {rows.map((row) => (
            <button
              key={row.name}
              className="bg-teal-100 hover:bg-teal-200 p-1 m-1 rounded-lg"
              onClick={() => setRest(roll(row.rollTable))}
            >
              {row.name}
            </button>
          ))}
        </div>
        <div className="w-full max-w-md border-4 border-teal-100 rounded-xl p-4 text-xl">
          {res
            ? <Result result={res} />
            : "Click on a button to start rolling"}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="w-full max-w-3xl m-auto">
      <Roller />
    </div>
  );
}

export default App;
