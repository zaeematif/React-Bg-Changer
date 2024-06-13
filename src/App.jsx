import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="h-screen w-full" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 bg-slate-200 mx-auto w-fit p-3 rounded-2xl">
        <button
          className="p-3 m-3 w-20 rounded-xl shadow-xl text-white bg-red-600"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="p-3 m-3 w-20 rounded-xl shadow-xl text-white bg-blue-600"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="p-3 m-3 w-20 rounded-xl shadow-xl text-white bg-green-600"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="p-3 m-3 w-20 rounded-xl shadow-xl text-white bg-black"
          onClick={() => setColor("black")}
        >
          Black
        </button>
        <button
          className="p-3 m-3 w-20 rounded-xl shadow-xl text-white bg-pink-500"
          onClick={() => setColor("pink")}
        >
          Peach
        </button>
        <button
          className="p-3 m-3 w-20 rounded-xl shadow-xl text-white bg-slate-500"
          onClick={() => setColor("gray")}
        >
          Grey
        </button>
      </div>
    </div>
  );
}

export default App;
