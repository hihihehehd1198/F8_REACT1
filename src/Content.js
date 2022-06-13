// import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import ListContent from "./listContent";
function Content({ ...props }) {
  const [title, setTitle] = useState("");
  const [isOpenList, setIsOpenList] = useState(false);
  useEffect(() => {
    document.title = title;
    // return () => {
    //   console.log("unmounted");
    // };
  });
  return (
    <div className="App">
      <h1>{props.name ?? "test"}</h1>
      <input
        placeholder="nhap title cho trang web "
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <div>
        <button onClick={() => setIsOpenList(!isOpenList)}>toggle list</button>
        {isOpenList && <ListContent />}
      </div>
    </div>
  );
}

export default Content;
