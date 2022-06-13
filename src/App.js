import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Content from "./Content";
import EffectCountDown from "./EffectCountdown";
// import listContent from "./listContent";

const orders = [100, 200, 300, 400, 500];
function App() {
  const [name, setName] = useState("");

  const [count, setCount] = useState(0);
  // const total = orders.reduce((acc, curr) => acc + curr, 0);
  const inputElement = useRef(null);
  const [isContent, setIsContent] = useState(false);
  const [listdata, setListData] = useState(
    JSON.parse(localStorage.getItem("listdata")) || []
  );
  const [item, setItem] = useState("");
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
  const insertData = () => {
    const itemData = [...listdata, { id: count, name: item }];
    setListData(itemData);
    localStorage.setItem("listdata", JSON.stringify(itemData));
    setItem("");
    inputElement.current.focus();
  };
  return (
    <div className="App">
      <button onClick={handleClick}>
        <h1>{count}</h1>
        <h1>{name}</h1>
        {/* <h1>{totalCount}</h1> */}
        {JSON.stringify(info)}
      </button>

      <div>
        <div>
          <input
            type={"text"}
            ref={(e) => (inputElement.current = e)}
            style={{ padding: 32 }}
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          <button onClick={insertData}> Add </button>
        </div>
        <div>
          <h1>list data</h1>
          <ul>
            {listdata.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </div>
      </div>

      <div>
        <button
          onClick={() => {
            setIsContent(!isContent);
          }}
        >
          toggle
        </button>
        {isContent && <Content name={null} />}
      </div>

      {/* effect countdown */}
      <div>
        {/* <EffectCountDown /> */}
      </div>
    </div>
  );
}

export default App;
