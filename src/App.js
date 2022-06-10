import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

const orders = [100, 200, 300, 400, 500];
function App() {
  const [name, setName] = useState("");

  const [count, setCount] = useState(0);
  // const total = orders.reduce((acc, curr) => acc + curr, 0);

  const [totalCount, setTotalCount] = useState(() => {
    const total = orders.reduce((acc, curr) => acc + curr, 0);
    return total;
  });

  const [info, setInfo] = useState({
    name: "",
    age: 0,
  });
  // console.log(total, totalCount);
  useEffect(() => {
    setName("John");
  }, []);
  const handleClick = function () {
    setCount(count + 1);
    setTotalCount((state) => {
      return state + 1;
    });
    setInfo((user) => {
      return {
        ...user,
        address: "vietnam",
      };
    });
  };
  return (
    <div className="App">
      <button onClick={handleClick}>
        <h1>{count}</h1>
        <h1>{name}</h1>
        {/* <h1>{totalCount}</h1> */}
        {JSON.stringify(info)}
      </button>
    </div>
  );
}

export default App;
